local gamepad = require 'gamepad'

local function drawBox(box, r,g,b)
  love.graphics.setColor(r,g,b)
  love.graphics.rectangle("fill", box.x, box.y, box.w, box.h)
  love.graphics.setColor(255, 255, 255)
end

local function initializePlayer()
  local player = {x=(2*32), y=(14*32), w=20, h=20, speed=80}
  local speed = player.speed
  
  function player.updatePlayer(dt)
    local dx, dy = 0, 0
    if gamepad.isRightDown() then
      dx = speed * dt
    elseif gamepad.isLeftDown() then
      dx = -speed * dt
    end
    if gamepad.isDownDown() then 
      dy = speed * dt
    elseif gamepad.isUpDown() then
      dy = -speed * dt
    end --]]
    return dx, dy
    
  end
    
  function player.drawPlayer()
    drawBox(player, 0,255,0)
  end
  
  return player
end

return initializePlayer()