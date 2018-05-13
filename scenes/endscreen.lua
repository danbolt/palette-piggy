local menu = require "scenes.menu"

local endScreen = {}

function endScreen:draw()
    love.graphics.print("Game over. Press Enter to play again.", 10, 10)
end

function endScreen:keyreleased(key, code)
    if key == 'return' then
        Gamestate.switch(menu)
    end
end

return endScreen