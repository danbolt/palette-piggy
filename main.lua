-- 2D Collision-detection library
local bump = require 'lib.bump'

local world = bump.newWorld(50)

-- Test Box
local testBox = {x=100, y=100, w=50, h=50}

local function drawBox(box, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", box.x, box.y, box.w, box.h)
end

local map = require 'map'

-- image data
local imageData = { redSquare = nil }

map.set (2, 4, "red")
map.set (1, 9, "red")
map.set (6, 7, "red")
map.set (3, 6, "red")

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
  world:add(testBox, testBox.x, testBox.y, testBox.w, testBox.h)
  
  imageData.redSquare = love.graphics.newImage('asset/img/square_red.png')
end


function love.update(dt)
  updatePlayer(dt)
end

function love.draw()
  drawPlayer()
  drawBox(testBox, 0, 255, 0)

  love.graphics.setColor(255, 255, 255)
  for x=1,10 do
    for y=1,10 do
     local tile = map.get(x,y)
     if tile == "red" then love.graphics.draw(imageData.redSquare, x * 32, y * 32) end
   end
 end
end
