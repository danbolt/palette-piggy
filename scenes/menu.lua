local levels = require "scenes.levellogic"
local endscreen = require "scenes.endscreen"

local menu = {}


endscreen.menu = menu

function menu:draw()
    love.graphics.print("Press Enter to continue", 10, 10)
end

function menu:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(levels)
    end
end

return menu