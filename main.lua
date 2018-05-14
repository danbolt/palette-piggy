Gamestate = require "lib.gamestate"

local menu = require "scenes.menu"




-- Main LÖVE functions
function love.load(arg)
  if arg[#arg] == "-debug" then require("mobdebug").start() end
  
  love.window.setMode(20*32, 15 * 32)
  love.window.setTitle('Pig Lyfe')
  
  Gamestate.registerEvents()
  Gamestate.switch(menu)
end




  