-- Gamepad

local gamePad = {}


local joysticks = love.joystick.getJoysticks()
joystick = joysticks[1]

 
function gamePad.isRightDown() 
  local gamepadDown = false
  local keyboardDown = false
  
  if joystick then
    gamepadDown = joystick:isGamepadDown("dpright")
    
  end 
  
  keyboardDown = love.keyboard.isDown("right")
  
  return gamepadDown or keyboardDown
  
end

function gamePad.isLeftDown()
  local gamepadDown = false
  local keyboardDown = false
  
  if joystick then 
    gamepadDown = joystick:isGamepadDown("dpleft")
    
  end
  
  keyboardDown = love.keyboard.isDown("left")
  
  return gamepadDown or keyboardDown
  
 end

function gamePad.isUpDown()
  local gamepadDown = false
  local keyboardDown = false
  
  if joystick then
    gamepadDown = joystick:isGamepadDown("dpup")
    
  end
  
  keyboardDown = love.keyboard.isDown("up")
  
  return gamepadDown or keyboardDown
  
end

function gamePad.isDownDown()
  local gamepadDown = false
  local keyboardDown = false
  
  if joystick then
    gamepadDown = joystick:isGamepadDown("dpdown")
    
  end
  
  keyboardDown = love.keyboard.isDown("down")
  
  return gamepadDown or keyboardDown
  
end

 return gamePad
 
 