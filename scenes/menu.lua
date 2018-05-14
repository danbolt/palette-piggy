local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}

font = love.graphics.newFont("asset/fonts/Sniglet-Regular.ttf", 50)


endscreen.menu = menu

function menu:enter()
title = love.graphics.newImage('asset/img/Title.png')
end

local function drawDecorationCircles()
  local radius = 48
  local yTop = 0
  local yBottom = love.graphics.getHeight()
  local offset = ((love.timer.getTime() * 30) % (radius * 2.5))
  local spacing = radius * 2.5
  love.graphics.setColor(1, 1, 1, 0.4)
  for i=-2,(math.floor(love.graphics.getWidth() / radius)) do
    local horizontalSpot = i * spacing + offset
    love.graphics.circle("fill", horizontalSpot, yTop, radius)
    love.graphics.circle("fill", horizontalSpot, yBottom, radius)
  end
end

local function calculateTextOffset()
  local magnitudeX = 0
  local magnitudeY = 0
  local textOffsetX = 0
  local textOffsetY = 0
  if math.abs(math.sin(love.timer.getTime() * 1.3)) > 0.8 then
    magnitudeX = math.sin(love.timer.getTime() * 20) * 1.2 + math.sin(love.timer.getTime() * 26) * 0.25
    magnitudeY = math.cos(love.timer.getTime() * 24) * 1.2 + math.cos(love.timer.getTime() * 26) * 0.25
    textOffsetX = math.cos(love.timer.getTime() * 14) * magnitudeX
    textOffsetY = math.sin(love.timer.getTime() * 22) * magnitudeY
  end
  
  return magnitudeX, magnitudeY
end

function menu:draw()
  --drawDecorationCircles()
  
  offsetX, offsetY = calculateTextOffset()
  
  love.graphics.setFont(font)
  love.graphics.setBackgroundColor(1,0.62745098039,0.62745098039)
  love.graphics.setColor(1,1,1,1)
  love.graphics.draw(title,72,64,0,.8)
  love.graphics.setColor(0.41960,0.97254,0.71764)
  love.graphics.print("Press Enter", math.floor(love.graphics.getWidth() / 2 + offsetX), math.floor(love.graphics.getHeight() * 0.65 + offsetY + 32), 0, 1, 1, 128)
    
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu