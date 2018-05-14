local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}

font = love.graphics.newFont("asset/fonts/Sniglet-Regular.ttf", 75)


endscreen.menu = menu

function menu:enter()
title = love.graphics.newImage('asset/img/Title.png')
end


function menu:draw()
    love.graphics.setFont(font)
    love.graphics.setBackgroundColor(1,0.62745098039,0.62745098039)
    love.graphics.draw(title,72,0,0,.8)
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu