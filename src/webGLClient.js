// WebGLWorker client code

function assert(x) {
  if (!x) throw 'failed assert';
}

function WebGLClient() {
  var objects = {};

  var ctx = null;
  var buffer = null;
  var i = 0;

  function func0(name) {
    ctx[name]();
  }
  function func1(name) {
    ctx[name](buffer[i]);
    i++;
  }
  function func2(name) {
    ctx[name](buffer[i], buffer[i+1]);
    i += 2;
  }
  function func3(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2]);
    i += 3;
  }
  function func4(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3]);
    i += 4;
  }
  function func5(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3], buffer[i+4]);
    i += 5;
  }
  function func6(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3], buffer[i+4], buffer[i+5]);
    i += 6;
  }
  function func7(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3], buffer[i+4], buffer[i+5], buffer[i+6]);
    i += 7;
  }
  function func9(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3], buffer[i+4], buffer[i+5], buffer[i+6], buffer[i+7], buffer[i+8]);
    i += 9;
  }

  // lookuppers, convert integer ids to cached objects for some args
  function func1L0(name) {
    ctx[name](objects[buffer[i]]);
    i++;
  }
  function func2L0(name) {
    ctx[name](objects[buffer[i]], buffer[i+1]);
    i += 2;
  }
  function func2L0L1(name) {
    ctx[name](objects[buffer[i]], objects[buffer[i+1]]);
    i += 2;
  }
  function func2L1_(name) {
    ctx[name](buffer[i], buffer[i+1] ? objects[buffer[i+1]] : null);
    i += 2;
  }
  function func3L0(name) {
    ctx[name](objects[buffer[i]], buffer[i+1], buffer[i+2]);
    i += 3;
  }
  function func4L3_(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3] ? objects[buffer[i+3]] : null);
    i += 4;
  }
  function func5L3_(name) {
    ctx[name](buffer[i], buffer[i+1], buffer[i+2], buffer[i+3] ? objects[buffer[i+3]] : null, buffer[i+4]);
    i += 5;
  }

  // constructors, last argument is the id to save as
  function funcC0(name) {
    var object = ctx[name]();
    var id = buffer[i++];
    objects[id] = object;
  }
  function funcC1(name) {
    var object = ctx[name](buffer[i++]);
    var id = buffer[i++];
    objects[id] = object;
  }
  function funcC2(name) {
    var object = ctx[name](buffer[i++], buffer[i++]);
    var id = buffer[i++];
    objects[id] = object;
  }
  function funcC2L0(name) {
    var object = ctx[name](objects[buffer[i++]], buffer[i++]);
    var id = buffer[i++];
    objects[id] = object;
  }

  // destructors, stop holding on to the object in the cache
  function funcD0(name) {
    var id = buffer[i++];
    var object = objects[id];
    objects[id] = null;
    ctx[name](object);
  }

  var calls = {
    0: { name: 'NULL', func: func0 },
    1: { name: 'getExtension', func: func1 },
    2: { name: 'enable', func: func1 },
    3: { name: 'disable', func: func1 },
    4: { name: 'clear', func: func1 },
    5: { name: 'clearColor', func: func4 },
    6: { name: 'createShader', func: funcC1 },
    7: { name: 'deleteShader', func: funcD0 },
    8: { name: 'shaderSource', func: func2L0 },
    9: { name: 'compileShader', func: func1L0 },
    10: { name: 'createProgram', func: funcC0 },
    11: { name: 'deleteProgram', func: funcD0 },
    12: { name: 'attachShader', func: func2L0L1 },
    13: { name: 'bindAttribLocation', func: func3L0 },
    14: { name: 'linkProgram', func: func1L0 },
    15: { name: 'getProgramParameter', func: function() { assert(ctx.getProgramParameter(objects[buffer[i++]], buffer[i++]), 'we cannot handle errors, we are async proxied WebGL'); } },
    16: { name: 'getUniformLocation', func: funcC2L0 },
    17: { name: 'useProgram', func: func1L0 },
    18: { name: 'uniform1i', func: func2L0 },
    19: { name: 'uniform1f', func: func2L0 },
    20: { name: 'uniform3fv', func: func2L0 },
    21: { name: 'uniform4fv', func: func2L0 },
    22: { name: 'uniformMatrix4fv', func: func3L0 },
    23: { name: 'vertexAttrib4fv', func: func2 },
    24: { name: 'createBuffer', func: funcC0 },
    25: { name: 'deleteBuffer', func: funcD0 },
    26: { name: 'bindBuffer', func: func2L1_ },
    27: { name: 'bufferData', func: func3 },
    28: { name: 'bufferSubData', func: func3 },
    29: { name: 'viewport', func: func4 },
    30: { name: 'vertexAttribPointer', func: func6 },
    31: { name: 'enableVertexAttribArray', func: func1 },
    32: { name: 'disableVertexAttribArray', func: func1 },
    33: { name: 'drawArrays', func: func3 },
    34: { name: 'drawElements', func: func4 },
    35: { name: 'getError', func: function() { assert(ctx.getError() === ctx.NO_ERROR, 'we cannot handle errors, we are async proxied WebGL') } },
    36: { name: 'createTexture', func: funcC0 },
    37: { name: 'deleteTexture', func: funcD0 },
    38: { name: 'bindTexture', func: func2L1_ },
    39: { name: 'texParameteri', func: func3 },
    40: { name: 'texImage2D', func: func9 },
    41: { name: 'compressedTexImage2D', func: func7 },
    42: { name: 'activeTexture', func: func1 },
    43: { name: 'getShaderParameter', func: function() { assert(ctx.getShaderParameter(objects[buffer[i++]], buffer[i++]), 'we cannot handle errors, we are async proxied WebGL'); } },
    44: { name: 'clearDepth', func: func1 },
    45: { name: 'depthFunc', func: func1 },
    46: { name: 'frontFace', func: func1 },
    47: { name: 'cullFace', func: func1 },
    48: { name: 'pixelStorei', func: func2 },
    49: { name: 'depthMask', func: func1 },
    50: { name: 'depthRange', func: func2 },
    51: { name: 'blendFunc', func: func2 },
    52: { name: 'scissor', func: func4 },
    53: { name: 'colorMask', func: func4 },
    54: { name: 'lineWidth', func: func1 },
    55: { name: 'createFramebuffer', func: funcC0 },
    56: { name: 'deleteFramebuffer', func: funcD0 },
    57: { name: 'bindFramebuffer', func: func2L1_ },
    58: { name: 'framebufferTexture2D', func: func5L3_ },
    59: { name: 'createRenderbuffer', func: funcC0 },
    60: { name: 'deleteRenderbuffer', func: funcD0 },
    61: { name: 'bindRenderbuffer', func: func2L1_ },
    62: { name: 'renderbufferStorage', func: func4 },
    63: { name: 'framebufferRenderbuffer', func: func4L3_ },
    64: { name: 'debugPrint', func: func1 },
  };

  function renderCommands(buf) {
    ctx = Module.ctx;
    i = 0;
    buffer = buf;
    var len = buffer.length;
    //dump('issuing commands, buffer len: ' + len + '\n');
    while (i < len) {
      var info = calls[buffer[i++]];
      var name = info.name;
      info.func(name);
      //var err;
      //while ((err = ctx.getError()) !== ctx.NO_ERROR) {
      //  dump('warning: GL error ' + err + ', after ' + [command, numArgs] + '\n');
      //}
      assert(i <= len);
    }
  }

  var commandBuffers = [];

  function renderAllCommands() {
    // TODO: we can avoid running commands from buffers that are not the last, if they
    //       have no side effects, as each buffer is from a different frame
    //if (commandBuffers.length > 1) dump('extra buffs: ' + (commandBuffers.length-1) + '\n');
    for (var i = 0; i < commandBuffers.length; i++) {
      renderCommands(commandBuffers[i]);
    }
    commandBuffers.length = 0;
  }

  this.onmessage = function(msg) {
    //dump('client GL got ' + JSON.stringify(msg) + '\n');
    switch(msg.op) {
      case 'render': {
        if (commandBuffers.length === 0) {
          // requestion a new frame, we will clear the buffers after rendering them
          window.requestAnimationFrame(renderAllCommands);
        }
        commandBuffers.push(msg.commandBuffer);
        break;
      }
      default: throw 'weird gl onmessage ' + JSON.stringify(msg);
    }
  };
}

WebGLClient.prefetch = function() {
  // Create a fake temporary GL context
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('webgl-experimental') || canvas.getContext('webgl');
  if (!ctx) return;
  // Fetch the parameters and proxy them
  var parameters = {};
  ['MAX_VERTEX_ATTRIBS', 'MAX_TEXTURE_IMAGE_UNITS', 'MAX_TEXTURE_SIZE', 'MAX_CUBE_MAP_TEXTURE_SIZE', 'MAX_VERTEX_UNIFORM_VECTORS', 'MAX_FRAGMENT_UNIFORM_VECTORS', 'MAX_VARYING_VECTORS', 'MAX_COMBINED_TEXTURE_IMAGE_UNITS', 'VENDOR', 'RENDERER', 'VERSION'].forEach(function(name) {
    var id = ctx[name];
    parameters[id] = ctx.getParameter(id);
  });
  // Try to enable some extensions, so we can access their parameters
  [{ extName: 'EXT_texture_filter_anisotropic', paramName: 'MAX_TEXTURE_MAX_ANISOTROPY_EXT' }].forEach(function(pair) {
    var ext = ctx.getExtension(pair.extName) || ctx.getExtension('MOZ_' + pair.extName) || 'WEBKIT_' + ctx.getExtension(pair.extName);
    if (ext) {
      var id = ext[pair.paramName];
      parameters[id] = ctx.getParameter(id);
    }
  });
  worker.postMessage({ target: 'gl', op: 'setPrefetched', parameters: parameters, extensions: ctx.getSupportedExtensions() });
};

