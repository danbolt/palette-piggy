local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}

font = love.graphics.newFont("asset/fonts/Sniglet-Regular.ttf", 50)


endscreen.menu = menu

function menu:enter()
title = love.graphics.newImage('asset/img/Title.png')
end


function menu:draw()
  local magnitudeX = 0
  local magnitudeY = 0
  local textOffsetX = 0
  local textOffsetY = 0
  
  if math.abs(math.sin(love.timer.getTime() * 1.3)) > 0.8 then
    magnitudeX = math.sin(love.timer.getTime() * 20) * 5 + math.sin(love.timer.getTime() * 26) * 3
    magnitudeY = math.cos(love.timer.getTime() * 24) * 5 + math.cos(love.timer.getTime() * 26) * 3
    textOffsetX = math.cos(love.timer.getTime() * 14) * magnitudeX
    textOffsetY = math.sin(love.timer.getTime() * 22) * magnitudeY
  end
  
  love.graphics.setFont(font)
  love.graphics.setBackgroundColor(1,0.62745098039,0.62745098039)
  love.graphics.setColor(1,1,1,1)
  love.graphics.draw(title,72,0,0,.8)
  love.graphics.setColor(0.51372,0.94509,0.86666)
  love.graphics.print("Press Enter", math.floor(love.graphics.getWidth() / 2 + textOffsetX), math.floor(love.graphics.getHeight() * 0.65 + textOffsetY), 0, 1, 1, 128)
    
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu