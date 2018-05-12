-- 2D Collision-detection library
local bump = require 'lib.bump'

local world = bump.newWorld(50)

local function drawBox(box, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", box.x, box.y, box.w, box.h)
end

local map = require 'map'

-- image data
local imageData = { redSquare = nil }

local function initializeMap()
  map.set (2, 4, "red")
  map.set (1, 9, "red")
  map.set (6, 7, "red")
  map.set (3, 6, "red")
end

-- Player Stuff
local player = {x=50, y=50, w=20, h=20, speed=80}

local function updatePlayer(dt)
  local speed = player.speed
  
  local dx, dy = 0, 0
  if love.keyboard.isDown('right') then
    dx = speed * dt
  elseif love.keyboard.isDown('left') then
    dx = -speed * dt
  end
  if love.keyboard.isDown('down') then
    dy = speed * dt
  elseif love.keyboard.isDown('up') then
    dy = -speed * dt
  end
  
  player.x, player.y = world:move(player, player.x + dx, player.y + dy)
end

local function drawPlayer()
  drawBox(player, 0,255,0)
end

-- Main LÖVE functions
function love.load()
  world:add(player, player.x, player.y, player.w, player.h)
  
  initializeMap()

  for mapx=1,10 do
    for mapy=1,10 do
     local tile = map.get(mapx,mapy)
     if tile == "red" then 
       local wall = {x= mapx*32, y= mapy*32, w=32, h=32}
       world:add(wall, wall.x, wall.y, wall.w, wall.h)
    end
   end
 end
  
  imageData.redSquare = love.graphics.newImage('asset/img/square_red.png')
end

function love.update(dt)
  updatePlayer(dt)
end

function love.draw()
  drawPlayer()
  map.draw(imageData.redSquare)
end
