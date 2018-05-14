-- 2D Collision-detection library
local bump = require 'lib.bump'
local Camera = require 'lib.Camera'
local tween = require 'lib.tween'
local Gamestate = require 'lib.gamestate'
local endscreen = require 'scenes.endscreen'

local endbox = require 'endbox'
local mapdata = require 'mapdata'
local player = require 'player'
local world = nil
local currentMap = 'red' 
local currentWalls = {}

local levelLogic = {}
local levels = { 'tutorial', 'level1' }
local currentLevel = 1

local src = love.audio.newSource('asset/bgm/roots.mp3', 'stream')

local t = nil
local text = {x = 0, y = 7 * 32, alp = 0, fadeIn = false}

-- image data
local imageData = { redSquare = nil }

local function getCurrentColour(currentMap)
  if currentMap == 'red' then
    return 0.87058,0.14117,0.41568,1,0,0
  elseif currentMap == 'blue' then
    return 0.25490,0.65882,0.97254,0,0,1
  elseif currentMap == 'yellow' then
    return 0.92549,0.95294,0.2,0,1,1
  elseif currentMap == 'green' then
    return 0.51372,0.97843,0.76666,0,1,0
  end
end

local function renderMap(currentMap,nextMap)
  love.graphics.setColor(1,1,1,1)
  r,g,b,r2,g2,b2 = getCurrentColour(currentMap)
  for mapx=1,mapdata.getMapWidth(nextMap) do
    for mapy=1,mapdata.getMapHeight(nextMap) do
     local tile = mapdata.getTileAt(nextMap, mapx, mapy)
      if tile == true then
        love.graphics.setColor(r2,g2,b2,1)
        love.graphics.rectangle("fill", mapx*32, mapy*32,32,32)
      end
     end
   end  
  for mapx=1,mapdata.getMapWidth(currentMap) do
    for mapy=1,mapdata.getMapHeight(currentMap) do
     local tile = mapdata.getTileAt(currentMap, mapx, mapy)
      if tile == true then
        love.graphics.setColor(r,g,b,1)
        love.graphics.rectangle("fill", mapx*32, mapy*32,32,32) 
      end
     end
   end
 end
 
 local function addWalls()
  for mapx=1,(mapdata.getMapWidth(currentMap)) do
    for mapy=1,mapdata.getMapHeight(currentMap) do
     local tile = mapdata.getTileAt(currentMap, mapx, mapy)
     if tile == true then 
       local wall = {x= mapx*32, y= mapy*32, w=32, h=32}
       world:add(wall, wall.x, wall.y, wall.w, wall.h)
       table.insert(currentWalls, wall)
    end
   end
 end
end
 
 local function removeMap()
  for i=1, #currentWalls do
    local wall = currentWalls[i]
    world:remove(wall)
  end
  currentWalls = {}
 end
   
   local function nextMap(prevMap)
    if prevMap == 'red' then
     return 'blue'
    elseif prevMap == 'blue' then
      return 'yellow'
    elseif prevMap == 'yellow' then
      return 'green'
    elseif prevMap == 'green' then
      return 'red'
    end
  end  
 
 local function switchMap()
   removeMap()
   currentMap = nextMap(currentMap)
   addWalls()
  end

local function isInWall(map, x, y)
  local playerTileX = math.floor(x / 32)
  local playerTileY = math.floor(y /32)
  
  return mapdata.getTileAt(map, playerTileX, playerTileY)
end

function levelLogic:enter()
  imageData.redSquare = love.graphics.newImage('asset/img/square_red.png')
  imageData.blueSquare = love.graphics.newImage('asset/img/square_blue.png')
  imageData.greenSquare = love.graphics.newImage('asset/img/square_green.png')
  imageData.yellowSquare = love.graphics.newImage('asset/img/square_yellow.png')
  
  imageData.piggySheet = love.graphics.newImage('asset/img/piggysheet.png')
  src:setLooping(true)
  src:play()
  
  camera = Camera()
  camera:setDeadzone(love.graphics.getWidth() / 2, love.graphics.getHeight() / 2, 0, 0)
  camera:setFollowLerp(0.2)
  
  player.spriteSheet = imageData.piggySheet
  
  mapdata.loadLevel(levels[currentLevel])
  
  world = bump.newWorld()
  
  world:add(player, player.x, player.y, player.w, player.h)
  world:add(endbox, endbox.x, endbox.y, endbox.w, endbox.h)
  addWalls()

end

local function nextLevel()
  world:remove(player)
  removeMap()
  currentMap = 'red'
  player.resetPlayer()
       
  currentLevel = currentLevel + 1
  if currentLevel > #levels then
    src:stop()
    currentLevel = 1    
    Gamestate.switch(endscreen)
  else
    Gamestate.switch(levelLogic)
  end
end
      

local function checkCollisions(dx,dy)
  deltaX, deltaY, collisions, numberofcollisions = world:move(player, player.x + dx, player.y + dy)
    player.x = deltaX
    player.y = deltaY 
    for i=1, numberofcollisions do
      local collision = collisions[i]
      if collision.other == endbox then
        nextLevel()
      end
    end
  end
  

function levelLogic:update(dt)
  local dx, dy = player.updatePlayer(dt) 
    
    camera:update(dt)
    camera:follow(love.graphics.getWidth() / 2, love.graphics.getHeight() / 2)
    
    checkCollisions(dx,dy)
    if t ~= nil then
      local completed = t:update(dt)
      if completed and text.fadeIn then
        t = tween.new(2, text, {alp=0}, 'linear')
        text.fadeIn = false
      end
    end    
end

function levelLogic:draw()
  
  camera:attach()
  renderMap(currentMap, nextMap(currentMap))
  love.graphics.setColor(1,1,1)
  player.drawPlayer()
  endbox.draw()
  love.graphics.setColor(255, 0, 0, text.alp)
  love.graphics.printf("Careful where you walk", text.x, text.y, love.graphics.getWidth(), 'center')
  
  camera:detach()
  
end

function levelLogic:keypressed(key)
  if key == "space" then
    playerTopLeft = isInWall(nextMap(currentMap), player.x + 0.5, player.y + 0.5)
    playerTopRight = isInWall(nextMap(currentMap), (player.x + player.w) - 0.5, player.y + 0.5)
    playerBottomLeft = isInWall(nextMap(currentMap), player.x + 0.5, (player.y + player.h) - 0.5)
    playerBottomRight = isInWall(nextMap(currentMap), (player.x + player.w) - 0.5, (player.y + player.h) - 0.5)
    if not (playerTopLeft or playerTopRight or playerBottomLeft or playerBottomRight) then
      switchMap()
    else
      camera:shake(3.5, 1, 60)
      if currentLevel == 1 then
        t = tween.new(4, text, {alp=1}, 'linear')
        text.fadeIn = true
      end      
    end
  end
end

return levelLogic