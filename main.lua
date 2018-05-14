Gamestate = require "lib.gamestate"

local menu = require "scenes.menu"




-- Main LÖVE functions
function love.load(arg)
  if arg[#arg] == "-debug" then require("mobdebug").start() end
  
  Gamestate.registerEvents()
  Gamestate.switch(menu)
end




  