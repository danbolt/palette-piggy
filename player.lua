local anim8 = require 'lib.anim8'

local gamepad = require 'gamepad'

local function drawBox(box, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", box.x, box.y, box.w, box.h)
  love.graphics.setColor(255, 255, 255)
end

local function initializePlayer()
  local player = {x=(2*32), y=(14*32), w=20, h=20, speed=80, spriteSheet = nil, animations = nil, currentAnimation = nil, facingRight = true}
  local speed = player.speed
  
  function player.initializeAnimations()
    if player.spriteSheet == nil then
      return
    end
    
    player.animations = {}
    
    local imageWidth = player.spriteSheet:getWidth()
    local imageHeight = player.spriteSheet:getHeight()
    local grid = anim8.newGrid(128, 128, imageWidth, imageHeight)
    player.animations['idle_right'] = anim8.newAnimation(grid('1-1', 1), 0.15)
    player.animations['walk_right'] = anim8.newAnimation(grid('2-3', 1), 0.15)
    player.animations['walk_left'] = anim8.newAnimation(grid('2-3', 2), 0.15)
    player.animations['idle_left'] = anim8.newAnimation(grid('1-1', 2), 0.15)
    
    player.currentAnimation = 'idle_right'
  end
  
  function player.updateAnimationState(dx, dy)
    local animationType = 'idle'
    local animationDirection = 'right'
    if dx ~= 0 or dy ~= 0 then
      animationType = 'walk'
    end
    if player.facingRight == false then
      animationDirection = 'left'
    end
    
    player.currentAnimation = animationType .. '_' .. animationDirection
  end
  
  function player.updatePlayer(dt)
    if player.animations == nil then
      player.initializeAnimations()
    else
      player.animations[player.currentAnimation]:update(dt)
    end
  
    local dx, dy = 0, 0
    if gamepad.isRightDown() then
      dx = speed * dt
      
      player.facingRight = true
    elseif gamepad.isLeftDown() then
      dx = -speed * dt
      
      player.facingRight = false
    end
    if gamepad.isDownDown() then 
      dy = speed * dt
    elseif gamepad.isUpDown() then
      dy = -speed * dt
    end
    
    player.updateAnimationState(dx, dy)
    
    return dx, dy
  end
    
  function player.drawPlayer()
    --drawBox(player, 0,255,0)
    player.animations[player.currentAnimation]:draw(player.spriteSheet, player.x, player.y, 0, 0.75, 0.75, 56, 58)
  end
  
  function player.resetPlayer()
    player.x=(2*32)
    player.y=(14*32)
  end
  
  return player
end

return initializePlayer()