-- 2D Collision-detection library
local bump = require 'lib.bump'
local Camera = require 'lib.Camera'

local endbox = require 'endbox'
local mapdata = require 'mapdata'
local player = require 'player'
local world = bump.newWorld()
local currentMap = 'red' 
local currentWalls = {}

local levelLogic = {}

-- image data
local imageData = { redSquare = nil }

local function getCurrentColour(currentMap)
  if currentMap == 'red' then
    return imageData.redSquare
  elseif currentMap == 'blue' then
    return imageData.blueSquare
  elseif currentMap == 'yellow' then
    return imageData.yellowSquare
  elseif currentMap == 'green' then
    return imageData.greenSquare
  end
end

local function renderMap(currentMap)
  for mapx=1,mapdata.getMapWidth(currentMap) do
    for mapy=1,mapdata.getMapHeight(currentMap) do
     local tile = mapdata.getTileAt(currentMap, mapx, mapy)
      if tile == true then
        currentColour = getCurrentColour(currentMap)
        love.graphics.draw(currentColour, mapx * 32, mapy * 32) 
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
  
  camera = Camera()
  camera:setDeadzone(love.graphics.getWidth() / 2, love.graphics.getHeight() / 2, 0, 0)
  camera:setFollowLerp(0.2)
  
  mapdata.loadLevel('tutorial')
  
  world:add(player, player.x, player.y, player.w, player.h)
  world:add(endbox, endbox.x, endbox.y, endbox.w, endbox.h)
  addWalls()

end

function levelLogic:update(dt)
  local dx, dy = player.updatePlayer(dt, pressedKeys) 
    
    camera:update(dt)
    camera:follow(love.graphics.getWidth() / 2, love.graphics.getHeight() / 2)
    
    deltaX, deltaY, collisions, numberofcollisions = world:move(player, player.x + dx, player.y + dy)
    player.x = deltaX
    player.y = deltaY 
    for i=1, numberofcollisions do
      local collision = collisions[i]
      if collision.other == endbox then
        world:update(player, (2*32), (14*32))
        player.x = 2*32
        player.y = 14*32
      end
    end
end

function levelLogic:draw()
  camera:attach()
  love.graphics.setColor(0.1,0.1,0.1)
  renderMap(nextMap(currentMap))
  love.graphics.setColor(1,1,1)
  renderMap(currentMap)   
  player.drawPlayer()
  endbox.draw()
  camera:detach()
end

function levelLogic:keypressed(key)
  if key == "space" then
    playerTopLeft = isInWall(nextMap(currentMap), player.x, player.y)
    playerTopRight = isInWall(nextMap(currentMap), (player.x + player.w), player.y)
    playerBottomLeft = isInWall(nextMap(currentMap), player.x, (player.y + player.h))
    playerBottomRight = isInWall(nextMap(currentMap), (player.x + player.w), (player.y + player.h))
    if not (playerTopLeft or playerTopRight or playerBottomLeft or playerBottomRight) then
      switchMap()
    else
      camera:shake(3.5, 1, 60)
    end
  end
end

return levelLogic