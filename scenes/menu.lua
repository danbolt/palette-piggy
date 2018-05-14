local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}

font = love.graphics.newFont("asset/fonts/Sniglet-Regular.ttf", 150)


endscreen.menu = menu

function menu:draw()
    love.graphics.setFont(font)
    love.graphics.setBackgroundColor(1,0.62745098039,0.62745098039)
    love.graphics.setColor(0.57647059, 0.82352941, 0.78039216, 1)
    love.graphics.print("Palette Piggy", 10, 10)
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu