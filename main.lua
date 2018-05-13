Gamestate = require "lib.gamestate"

local levels = require "levellogic"



-- Main LÖVE functions
function love.load(arg)
  if arg[#arg] == "-debug" then require("mobdebug").start() end
  
  Gamestate.registerEvents()
  Gamestate.switch(levels)
end




  