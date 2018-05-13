local levels = require "scenes.levellogic"

local tutorial = {}

function tutorial:draw()
    
end

function tutorial:keyreleased(key, code)
    if --player reaches endbox
        Gamestate.switch(levels)
    end
end

return tutorial