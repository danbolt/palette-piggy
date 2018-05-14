local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}

font = love.graphics.newFont("asset/fonts/Sniglet-Regular.ttf", 50)


endscreen.menu = menu

function menu:enter()
title = love.graphics.newImage('asset/img/Title.png')
end


function menu:draw()
    love.graphics.setFont(font)
    love.graphics.setBackgroundColor(1,0.62745098039,0.62745098039)
    love.graphics.setColor(1,1,1,1)
    love.graphics.draw(title,72,0,0,.8)
    love.graphics.setColor(0.51372,0.94509,0.86666)
    love.graphics.print("Press Enter", love.graphics.getWidth() / 2, love.graphics.getHeight() * 0.65, 0, 1, 1, 128)
    
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu