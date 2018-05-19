
var Module;

if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');

if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {
 var loadPackage = function(metadata) {

  var PACKAGE_PATH;
  if (typeof window === 'object') {
    PACKAGE_PATH = window['encodeURIComponent'](window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf('/')) + '/');
  } else if (typeof location !== 'undefined') {
      // worker
      PACKAGE_PATH = encodeURIComponent(location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf('/')) + '/');
    } else {
      throw 'using preloaded data can only be done on a web page or in a web worker';
    }
    var PACKAGE_NAME = 'game.data';
    var REMOTE_PACKAGE_BASE = 'game.data';
    if (typeof Module['locateFilePackage'] === 'function' && !Module['locateFile']) {
      Module['locateFile'] = Module['locateFilePackage'];
      Module.printErr('warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)');
    }
    var REMOTE_PACKAGE_NAME = typeof Module['locateFile'] === 'function' ?
    Module['locateFile'](REMOTE_PACKAGE_BASE) :
    ((Module['filePackagePrefixURL'] || '') + REMOTE_PACKAGE_BASE);

    var REMOTE_PACKAGE_SIZE = metadata.remote_package_size;
    var PACKAGE_UUID = metadata.package_uuid;

    function fetchRemotePackage(packageName, packageSize, callback, errback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', packageName, true);
      xhr.responseType = 'arraybuffer';
      xhr.onprogress = function(event) {
        var url = packageName;
        var size = packageSize;
        if (event.total) size = event.total;
        if (event.loaded) {
          if (!xhr.addedTotal) {
            xhr.addedTotal = true;
            if (!Module.dataFileDownloads) Module.dataFileDownloads = {};
            Module.dataFileDownloads[url] = {
              loaded: event.loaded,
              total: size
            };
          } else {
            Module.dataFileDownloads[url].loaded = event.loaded;
          }
          var total = 0;
          var loaded = 0;
          var num = 0;
          for (var download in Module.dataFileDownloads) {
            var data = Module.dataFileDownloads[download];
            total += data.total;
            loaded += data.loaded;
            num++;
          }
          total = Math.ceil(total * Module.expectedDataFileDownloads/num);
          if (Module['setStatus']) Module['setStatus']('Downloading data... (' + loaded + '/' + total + ')');
        } else if (!Module.dataFileDownloads) {
          if (Module['setStatus']) Module['setStatus']('Downloading data...');
        }
      };
      xhr.onerror = function(event) {
        throw new Error("NetworkError for: " + packageName);
      }
      xhr.onload = function(event) {
        if (xhr.status == 200 || xhr.status == 304 || xhr.status == 206 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
          var packageData = xhr.response;
          callback(packageData);
        } else {
          throw new Error(xhr.statusText + " : " + xhr.responseURL);
        }
      };
      xhr.send(null);
    };

    function handleError(error) {
      console.error('package error:', error);
    };

    function runWithFS() {

      function assert(check, msg) {
        if (!check) throw msg + new Error().stack;
      }
      Module['FS_createPath']('/', '.git', true, true);
      Module['FS_createPath']('.git', 'hooks', true, true);
      Module['FS_createPath']('.git', 'info', true, true);
      Module['FS_createPath']('.git', 'logs', true, true);
      Module['FS_createPath']('.git/logs', 'refs', true, true);
      Module['FS_createPath']('.git/logs/refs', 'heads', true, true);
      Module['FS_createPath']('.git/logs/refs', 'remotes', true, true);
      Module['FS_createPath']('.git/logs/refs/remotes', 'origin', true, true);
      Module['FS_createPath']('.git', 'objects', true, true);
      Module['FS_createPath']('.git/objects', '02', true, true);
      Module['FS_createPath']('.git/objects', '03', true, true);
      Module['FS_createPath']('.git/objects', '04', true, true);
      Module['FS_createPath']('.git/objects', '05', true, true);
      Module['FS_createPath']('.git/objects', '06', true, true);
      Module['FS_createPath']('.git/objects', '07', true, true);
      Module['FS_createPath']('.git/objects', '08', true, true);
      Module['FS_createPath']('.git/objects', '09', true, true);
      Module['FS_createPath']('.git/objects', '0a', true, true);
      Module['FS_createPath']('.git/objects', '0b', true, true);
      Module['FS_createPath']('.git/objects', '0c', true, true);
      Module['FS_createPath']('.git/objects', '0d', true, true);
      Module['FS_createPath']('.git/objects', '0e', true, true);
      Module['FS_createPath']('.git/objects', '10', true, true);
      Module['FS_createPath']('.git/objects', '11', true, true);
      Module['FS_createPath']('.git/objects', '12', true, true);
      Module['FS_createPath']('.git/objects', '13', true, true);
      Module['FS_createPath']('.git/objects', '14', true, true);
      Module['FS_createPath']('.git/objects', '15', true, true);
      Module['FS_createPath']('.git/objects', '16', true, true);
      Module['FS_createPath']('.git/objects', '17', true, true);
      Module['FS_createPath']('.git/objects', '18', true, true);
      Module['FS_createPath']('.git/objects', '19', true, true);
      Module['FS_createPath']('.git/objects', '1a', true, true);
      Module['FS_createPath']('.git/objects', '1b', true, true);
      Module['FS_createPath']('.git/objects', '1c', true, true);
      Module['FS_createPath']('.git/objects', '1d', true, true);
      Module['FS_createPath']('.git/objects', '1f', true, true);
      Module['FS_createPath']('.git/objects', '20', true, true);
      Module['FS_createPath']('.git/objects', '22', true, true);
      Module['FS_createPath']('.git/objects', '23', true, true);
      Module['FS_createPath']('.git/objects', '24', true, true);
      Module['FS_createPath']('.git/objects', '26', true, true);
      Module['FS_createPath']('.git/objects', '27', true, true);
      Module['FS_createPath']('.git/objects', '28', true, true);
      Module['FS_createPath']('.git/objects', '2a', true, true);
      Module['FS_createPath']('.git/objects', '2c', true, true);
      Module['FS_createPath']('.git/objects', '2e', true, true);
      Module['FS_createPath']('.git/objects', '2f', true, true);
      Module['FS_createPath']('.git/objects', '30', true, true);
      Module['FS_createPath']('.git/objects', '33', true, true);
      Module['FS_createPath']('.git/objects', '34', true, true);
      Module['FS_createPath']('.git/objects', '35', true, true);
      Module['FS_createPath']('.git/objects', '37', true, true);
      Module['FS_createPath']('.git/objects', '39', true, true);
      Module['FS_createPath']('.git/objects', '3a', true, true);
      Module['FS_createPath']('.git/objects', '3b', true, true);
      Module['FS_createPath']('.git/objects', '3c', true, true);
      Module['FS_createPath']('.git/objects', '3d', true, true);
      Module['FS_createPath']('.git/objects', '3e', true, true);
      Module['FS_createPath']('.git/objects', '40', true, true);
      Module['FS_createPath']('.git/objects', '41', true, true);
      Module['FS_createPath']('.git/objects', '42', true, true);
      Module['FS_createPath']('.git/objects', '43', true, true);
      Module['FS_createPath']('.git/objects', '44', true, true);
      Module['FS_createPath']('.git/objects', '45', true, true);
      Module['FS_createPath']('.git/objects', '46', true, true);
      Module['FS_createPath']('.git/objects', '47', true, true);
      Module['FS_createPath']('.git/objects', '49', true, true);
      Module['FS_createPath']('.git/objects', '4a', true, true);
      Module['FS_createPath']('.git/objects', '4b', true, true);
      Module['FS_createPath']('.git/objects', '4d', true, true);
      Module['FS_createPath']('.git/objects', '4f', true, true);
      Module['FS_createPath']('.git/objects', '50', true, true);
      Module['FS_createPath']('.git/objects', '53', true, true);
      Module['FS_createPath']('.git/objects', '55', true, true);
      Module['FS_createPath']('.git/objects', '56', true, true);
      Module['FS_createPath']('.git/objects', '57', true, true);
      Module['FS_createPath']('.git/objects', '59', true, true);
      Module['FS_createPath']('.git/objects', '5a', true, true);
      Module['FS_createPath']('.git/objects', '5b', true, true);
      Module['FS_createPath']('.git/objects', '5d', true, true);
      Module['FS_createPath']('.git/objects', '5e', true, true);
      Module['FS_createPath']('.git/objects', '60', true, true);
      Module['FS_createPath']('.git/objects', '63', true, true);
      Module['FS_createPath']('.git/objects', '64', true, true);
      Module['FS_createPath']('.git/objects', '65', true, true);
      Module['FS_createPath']('.git/objects', '66', true, true);
      Module['FS_createPath']('.git/objects', '68', true, true);
      Module['FS_createPath']('.git/objects', '69', true, true);
      Module['FS_createPath']('.git/objects', '6a', true, true);
      Module['FS_createPath']('.git/objects', '6b', true, true);
      Module['FS_createPath']('.git/objects', '6c', true, true);
      Module['FS_createPath']('.git/objects', '6d', true, true);
      Module['FS_createPath']('.git/objects', '6e', true, true);
      Module['FS_createPath']('.git/objects', '6f', true, true);
      Module['FS_createPath']('.git/objects', '70', true, true);
      Module['FS_createPath']('.git/objects', '71', true, true);
      Module['FS_createPath']('.git/objects', '72', true, true);
      Module['FS_createPath']('.git/objects', '74', true, true);
      Module['FS_createPath']('.git/objects', '75', true, true);
      Module['FS_createPath']('.git/objects', '76', true, true);
      Module['FS_createPath']('.git/objects', '79', true, true);
      Module['FS_createPath']('.git/objects', '7b', true, true);
      Module['FS_createPath']('.git/objects', '7c', true, true);
      Module['FS_createPath']('.git/objects', '7d', true, true);
      Module['FS_createPath']('.git/objects', '7e', true, true);
      Module['FS_createPath']('.git/objects', '7f', true, true);
      Module['FS_createPath']('.git/objects', '80', true, true);
      Module['FS_createPath']('.git/objects', '82', true, true);
      Module['FS_createPath']('.git/objects', '83', true, true);
      Module['FS_createPath']('.git/objects', '85', true, true);
      Module['FS_createPath']('.git/objects', '86', true, true);
      Module['FS_createPath']('.git/objects', '87', true, true);
      Module['FS_createPath']('.git/objects', '88', true, true);
      Module['FS_createPath']('.git/objects', '89', true, true);
      Module['FS_createPath']('.git/objects', '8a', true, true);
      Module['FS_createPath']('.git/objects', '8b', true, true);
      Module['FS_createPath']('.git/objects', '8d', true, true);
      Module['FS_createPath']('.git/objects', '8f', true, true);
      Module['FS_createPath']('.git/objects', '91', true, true);
      Module['FS_createPath']('.git/objects', '92', true, true);
      Module['FS_createPath']('.git/objects', '93', true, true);
      Module['FS_createPath']('.git/objects', '94', true, true);
      Module['FS_createPath']('.git/objects', '95', true, true);
      Module['FS_createPath']('.git/objects', '96', true, true);
      Module['FS_createPath']('.git/objects', '97', true, true);
      Module['FS_createPath']('.git/objects', '98', true, true);
      Module['FS_createPath']('.git/objects', '99', true, true);
      Module['FS_createPath']('.git/objects', '9a', true, true);
      Module['FS_createPath']('.git/objects', '9d', true, true);
      Module['FS_createPath']('.git/objects', '9e', true, true);
      Module['FS_createPath']('.git/objects', '9f', true, true);
      Module['FS_createPath']('.git/objects', 'a1', true, true);
      Module['FS_createPath']('.git/objects', 'a2', true, true);
      Module['FS_createPath']('.git/objects', 'a3', true, true);
      Module['FS_createPath']('.git/objects', 'a4', true, true);
      Module['FS_createPath']('.git/objects', 'a6', true, true);
      Module['FS_createPath']('.git/objects', 'a7', true, true);
      Module['FS_createPath']('.git/objects', 'a8', true, true);
      Module['FS_createPath']('.git/objects', 'a9', true, true);
      Module['FS_createPath']('.git/objects', 'aa', true, true);
      Module['FS_createPath']('.git/objects', 'ab', true, true);
      Module['FS_createPath']('.git/objects', 'ac', true, true);
      Module['FS_createPath']('.git/objects', 'ad', true, true);
      Module['FS_createPath']('.git/objects', 'ae', true, true);
      Module['FS_createPath']('.git/objects', 'af', true, true);
      Module['FS_createPath']('.git/objects', 'b0', true, true);
      Module['FS_createPath']('.git/objects', 'b1', true, true);
      Module['FS_createPath']('.git/objects', 'b2', true, true);
      Module['FS_createPath']('.git/objects', 'b3', true, true);
      Module['FS_createPath']('.git/objects', 'b6', true, true);
      Module['FS_createPath']('.git/objects', 'b7', true, true);
      Module['FS_createPath']('.git/objects', 'b8', true, true);
      Module['FS_createPath']('.git/objects', 'ba', true, true);
      Module['FS_createPath']('.git/objects', 'bb', true, true);
      Module['FS_createPath']('.git/objects', 'bc', true, true);
      Module['FS_createPath']('.git/objects', 'bd', true, true);
      Module['FS_createPath']('.git/objects', 'be', true, true);
      Module['FS_createPath']('.git/objects', 'bf', true, true);
      Module['FS_createPath']('.git/objects', 'c0', true, true);
      Module['FS_createPath']('.git/objects', 'c2', true, true);
      Module['FS_createPath']('.git/objects', 'c3', true, true);
      Module['FS_createPath']('.git/objects', 'c4', true, true);
      Module['FS_createPath']('.git/objects', 'c5', true, true);
      Module['FS_createPath']('.git/objects', 'c6', true, true);
      Module['FS_createPath']('.git/objects', 'c8', true, true);
      Module['FS_createPath']('.git/objects', 'ca', true, true);
      Module['FS_createPath']('.git/objects', 'cc', true, true);
      Module['FS_createPath']('.git/objects', 'cd', true, true);
      Module['FS_createPath']('.git/objects', 'ce', true, true);
      Module['FS_createPath']('.git/objects', 'cf', true, true);
      Module['FS_createPath']('.git/objects', 'd0', true, true);
      Module['FS_createPath']('.git/objects', 'd1', true, true);
      Module['FS_createPath']('.git/objects', 'd3', true, true);
      Module['FS_createPath']('.git/objects', 'd4', true, true);
      Module['FS_createPath']('.git/objects', 'd5', true, true);
      Module['FS_createPath']('.git/objects', 'd6', true, true);
      Module['FS_createPath']('.git/objects', 'd7', true, true);
      Module['FS_createPath']('.git/objects', 'd8', true, true);
      Module['FS_createPath']('.git/objects', 'd9', true, true);
      Module['FS_createPath']('.git/objects', 'da', true, true);
      Module['FS_createPath']('.git/objects', 'db', true, true);
      Module['FS_createPath']('.git/objects', 'dc', true, true);
      Module['FS_createPath']('.git/objects', 'de', true, true);
      Module['FS_createPath']('.git/objects', 'e0', true, true);
      Module['FS_createPath']('.git/objects', 'e3', true, true);
      Module['FS_createPath']('.git/objects', 'e4', true, true);
      Module['FS_createPath']('.git/objects', 'e5', true, true);
      Module['FS_createPath']('.git/objects', 'e6', true, true);
      Module['FS_createPath']('.git/objects', 'e7', true, true);
      Module['FS_createPath']('.git/objects', 'ea', true, true);
      Module['FS_createPath']('.git/objects', 'eb', true, true);
      Module['FS_createPath']('.git/objects', 'ec', true, true);
      Module['FS_createPath']('.git/objects', 'ed', true, true);
      Module['FS_createPath']('.git/objects', 'ef', true, true);
      Module['FS_createPath']('.git/objects', 'f0', true, true);
      Module['FS_createPath']('.git/objects', 'f1', true, true);
      Module['FS_createPath']('.git/objects', 'f3', true, true);
      Module['FS_createPath']('.git/objects', 'f4', true, true);
      Module['FS_createPath']('.git/objects', 'f5', true, true);
      Module['FS_createPath']('.git/objects', 'f6', true, true);
      Module['FS_createPath']('.git/objects', 'f7', true, true);
      Module['FS_createPath']('.git/objects', 'f8', true, true);
      Module['FS_createPath']('.git/objects', 'f9', true, true);
      Module['FS_createPath']('.git/objects', 'fb', true, true);
      Module['FS_createPath']('.git/objects', 'fc', true, true);
      Module['FS_createPath']('.git/objects', 'fd', true, true);
      Module['FS_createPath']('.git/objects', 'ff', true, true);
      Module['FS_createPath']('.git/objects', 'info', true, true);
      Module['FS_createPath']('.git/objects', 'pack', true, true);
      Module['FS_createPath']('.git', 'refs', true, true);
      Module['FS_createPath']('.git/refs', 'heads', true, true);
      Module['FS_createPath']('.git/refs', 'remotes', true, true);
      Module['FS_createPath']('.git/refs/remotes', 'origin', true, true);
      Module['FS_createPath']('.git/refs', 'tags', true, true);
      Module['FS_createPath']('/', 'asset', true, true);
      Module['FS_createPath']('asset', 'bgm', true, true);
      Module['FS_createPath']('asset', 'fonts', true, true);
      Module['FS_createPath']('asset', 'img', true, true);
      Module['FS_createPath']('asset', 'map', true, true);
      Module['FS_createPath']('asset', 'vector', true, true);
      Module['FS_createPath']('/', 'lib', true, true);
      Module['FS_createPath']('lib', 'sti', true, true);
      Module['FS_createPath']('lib/sti', 'plugins', true, true);
      Module['FS_createPath']('/', 'scenes', true, true);

      function DataRequest(start, end, crunched, audio) {
        this.start = start;
        this.end = end;
        this.crunched = crunched;
        this.audio = audio;
      }
      DataRequest.prototype = {
        requests: {},
        open: function(mode, name) {
          this.name = name;
          this.requests[name] = this;
          Module['addRunDependency']('fp ' + this.name);
        },
        send: function() {},
        onload: function() {
          var byteArray = this.byteArray.subarray(this.start, this.end);

          this.finish(byteArray);

        },
        finish: function(byteArray) {
          var that = this;

        Module['FS_createDataFile'](this.name, null, byteArray, true, true, true); // canOwn this data in the filesystem, it is a slide into the heap that will never change
        Module['removeRunDependency']('fp ' + that.name);

        this.requests[this.name] = null;
      }
    };

    var files = metadata.files;
    for (i = 0; i < files.length; ++i) {
      new DataRequest(files[i].start, files[i].end, files[i].crunched, files[i].audio).open('GET', files[i].filename);
    }


    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDB_RO = "readonly";
    var IDB_RW = "readwrite";
    var DB_NAME = "EM_PRELOAD_CACHE";
    var DB_VERSION = 1;
    var METADATA_STORE_NAME = 'METADATA';
    var PACKAGE_STORE_NAME = 'PACKAGES';
    function openDatabase(callback, errback) {
      try {
        var openRequest = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (e) {
        return errback(e);
      }
      openRequest.onupgradeneeded = function(event) {
        var db = event.target.result;

        if(db.objectStoreNames.contains(PACKAGE_STORE_NAME)) {
          db.deleteObjectStore(PACKAGE_STORE_NAME);
        }
        var packages = db.createObjectStore(PACKAGE_STORE_NAME);

        if(db.objectStoreNames.contains(METADATA_STORE_NAME)) {
          db.deleteObjectStore(METADATA_STORE_NAME);
        }
        var metadata = db.createObjectStore(METADATA_STORE_NAME);
      };
      openRequest.onsuccess = function(event) {
        var db = event.target.result;
        callback(db);
      };
      openRequest.onerror = function(error) {
        errback(error);
      };
    };

    /* Check if there's a cached package, and if so whether it's the latest available */
    function checkCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([METADATA_STORE_NAME], IDB_RO);
      var metadata = transaction.objectStore(METADATA_STORE_NAME);

      var getRequest = metadata.get("metadata/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        if (!result) {
          return callback(false);
        } else {
          return callback(PACKAGE_UUID === result.uuid);
        }
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function fetchCachedPackage(db, packageName, callback, errback) {
      var transaction = db.transaction([PACKAGE_STORE_NAME], IDB_RO);
      var packages = transaction.objectStore(PACKAGE_STORE_NAME);

      var getRequest = packages.get("package/" + packageName);
      getRequest.onsuccess = function(event) {
        var result = event.target.result;
        callback(result);
      };
      getRequest.onerror = function(error) {
        errback(error);
      };
    };

    function cacheRemotePackage(db, packageName, packageData, packageMeta, callback, errback) {
      var transaction_packages = db.transaction([PACKAGE_STORE_NAME], IDB_RW);
      var packages = transaction_packages.objectStore(PACKAGE_STORE_NAME);

      var putPackageRequest = packages.put(packageData, "package/" + packageName);
      putPackageRequest.onsuccess = function(event) {
        var transaction_metadata = db.transaction([METADATA_STORE_NAME], IDB_RW);
        var metadata = transaction_metadata.objectStore(METADATA_STORE_NAME);
        var putMetadataRequest = metadata.put(packageMeta, "metadata/" + packageName);
        putMetadataRequest.onsuccess = function(event) {
          callback(packageData);
        };
        putMetadataRequest.onerror = function(error) {
          errback(error);
        };
      };
      putPackageRequest.onerror = function(error) {
        errback(error);
      };
    };

    function processPackageData(arrayBuffer) {
      Module.finishedDataFileDownloads++;
      assert(arrayBuffer, 'Loading data file failed.');
      assert(arrayBuffer instanceof ArrayBuffer, 'bad input to processPackageData');
      var byteArray = new Uint8Array(arrayBuffer);
      var curr;

        // copy the entire loaded file into a spot in the heap. Files will refer to slices in that. They cannot be freed though
        // (we may be allocating before malloc is ready, during startup).
        if (Module['SPLIT_MEMORY']) Module.printErr('warning: you should run the file packager with --no-heap-copy when SPLIT_MEMORY is used, otherwise copying into the heap may fail due to the splitting');
        var ptr = Module['getMemory'](byteArray.length);
        Module['HEAPU8'].set(byteArray, ptr);
        DataRequest.prototype.byteArray = Module['HEAPU8'].subarray(ptr, ptr+byteArray.length);

        var files = metadata.files;
        for (i = 0; i < files.length; ++i) {
          DataRequest.prototype.requests[files[i].filename].onload();
        }
        Module['removeRunDependency']('datafile_game.data');

      };
      Module['addRunDependency']('datafile_game.data');

      if (!Module.preloadResults) Module.preloadResults = {};

      function preloadFallback(error) {
        console.error(error);
        console.error('falling back to default preload behavior');
        fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE, processPackageData, handleError);
      };

      openDatabase(
        function(db) {
          checkCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME,
            function(useCached) {
              Module.preloadResults[PACKAGE_NAME] = {fromCache: useCached};
              if (useCached) {
                console.info('loading ' + PACKAGE_NAME + ' from cache');
                fetchCachedPackage(db, PACKAGE_PATH + PACKAGE_NAME, processPackageData, preloadFallback);
              } else {
                console.info('loading ' + PACKAGE_NAME + ' from remote');
                fetchRemotePackage(REMOTE_PACKAGE_NAME, REMOTE_PACKAGE_SIZE,
                  function(packageData) {
                    cacheRemotePackage(db, PACKAGE_PATH + PACKAGE_NAME, packageData, {uuid:PACKAGE_UUID}, processPackageData,
                      function(error) {
                        console.error(error);
                        processPackageData(packageData);
                      });
                  }
                  , preloadFallback);
              }
            }
            , preloadFallback);
        }
        , preloadFallback);

      if (Module['setStatus']) Module['setStatus']('Downloading...');

    }
    if (Module['calledRun']) {
      runWithFS();
    } else {
      if (!Module['preRun']) Module['preRun'] = [];
      Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
    }

  }
  loadPackage({"package_uuid":"0c0a8380-580e-4031-9db5-6b8a7cf4df7a","remote_package_size":15097801,"files":[{"filename":".DS_Store","crunched":0,"start":0,"end":8196,"audio":false},{"filename":".git/COMMIT_EDITMSG","crunched":0,"start":8196,"end":8561,"audio":false},{"filename":".git/FETCH_HEAD","crunched":0,"start":8561,"end":8663,"audio":false},{"filename":".git/HEAD","crunched":0,"start":8663,"end":8686,"audio":false},{"filename":".git/ORIG_HEAD","crunched":0,"start":8686,"end":8727,"audio":false},{"filename":".git/config","crunched":0,"start":8727,"end":9393,"audio":false},{"filename":".git/description","crunched":0,"start":9393,"end":9466,"audio":false},{"filename":".git/hooks/applypatch-msg.sample","crunched":0,"start":9466,"end":9944,"audio":false},{"filename":".git/hooks/commit-msg.sample","crunched":0,"start":9944,"end":10840,"audio":false},{"filename":".git/hooks/post-update.sample","crunched":0,"start":10840,"end":11029,"audio":false},{"filename":".git/hooks/pre-applypatch.sample","crunched":0,"start":11029,"end":11453,"audio":false},{"filename":".git/hooks/pre-commit.sample","crunched":0,"start":11453,"end":13095,"audio":false},{"filename":".git/hooks/pre-push.sample","crunched":0,"start":13095,"end":14443,"audio":false},{"filename":".git/hooks/pre-rebase.sample","crunched":0,"start":14443,"end":19341,"audio":false},{"filename":".git/hooks/pre-receive.sample","crunched":0,"start":19341,"end":19885,"audio":false},{"filename":".git/hooks/prepare-commit-msg.sample","crunched":0,"start":19885,"end":21377,"audio":false},{"filename":".git/hooks/update.sample","crunched":0,"start":21377,"end":24987,"audio":false},{"filename":".git/index","crunched":0,"start":24987,"end":29462,"audio":false},{"filename":".git/info/exclude","crunched":0,"start":29462,"end":29702,"audio":false},{"filename":".git/logs/HEAD","crunched":0,"start":29702,"end":42436,"audio":false},{"filename":".git/logs/refs/heads/daniel-animate-piggy","crunched":0,"start":42436,"end":42788,"audio":false},{"filename":".git/logs/refs/heads/daniel-fix-reset-flicker","crunched":0,"start":42788,"end":43324,"audio":false},{"filename":".git/logs/refs/heads/daniel-main-edits","crunched":0,"start":43324,"end":43686,"audio":false},{"filename":".git/logs/refs/heads/daniel-map-data","crunched":0,"start":43686,"end":44034,"audio":false},{"filename":".git/logs/refs/heads/daniel-map-loading","crunched":0,"start":44034,"end":44382,"audio":false},{"filename":".git/logs/refs/heads/master","crunched":0,"start":44382,"end":51944,"audio":false},{"filename":".git/logs/refs/remotes/origin/HEAD","crunched":0,"start":51944,"end":52147,"audio":false},{"filename":".git/logs/refs/remotes/origin/Natasha2","crunched":0,"start":52147,"end":52312,"audio":false},{"filename":".git/logs/refs/remotes/origin/daniel-animate-piggy","crunched":0,"start":52312,"end":52473,"audio":false},{"filename":".git/logs/refs/remotes/origin/daniel-array-bounds-fix","crunched":0,"start":52473,"end":52634,"audio":false},{"filename":".git/logs/refs/remotes/origin/daniel-fix-reset-flicker","crunched":0,"start":52634,"end":53117,"audio":false},{"filename":".git/logs/refs/remotes/origin/daniel-main-edits","crunched":0,"start":53117,"end":53278,"audio":false},{"filename":".git/logs/refs/remotes/origin/daniel-map-data","crunched":0,"start":53278,"end":53439,"audio":false},{"filename":".git/logs/refs/remotes/origin/kyle","crunched":0,"start":53439,"end":53604,"audio":false},{"filename":".git/logs/refs/remotes/origin/master","crunched":0,"start":53604,"end":60507,"audio":false},{"filename":".git/objects/02/8a7c50451431016f5915553c238b056af422e6","crunched":0,"start":60507,"end":61000,"audio":false},{"filename":".git/objects/02/fe083e679deb81d1fe57f0cd08ab7a94090b3e","crunched":0,"start":61000,"end":61285,"audio":false},{"filename":".git/objects/03/0e8a30653ba91cf15e8f125bae00302f9f6fff","crunched":0,"start":61285,"end":61776,"audio":false},{"filename":".git/objects/03/986318073ff3c8a832c9794dc2337145ea1884","crunched":0,"start":61776,"end":62042,"audio":false},{"filename":".git/objects/03/bcd3ec0981092ee6479bb459ebfed77b72f5dc","crunched":0,"start":62042,"end":62696,"audio":false},{"filename":".git/objects/03/d9b00c70c32c217b063e3603eba531ec9b5330","crunched":0,"start":62696,"end":62856,"audio":false},{"filename":".git/objects/03/fa7ccc527d253b342029cc7b9e3ef63b16afb7","crunched":0,"start":62856,"end":63033,"audio":false},{"filename":".git/objects/04/759bc054f8072a20a680d3b1f522a29846735f","crunched":0,"start":63033,"end":63098,"audio":false},{"filename":".git/objects/04/cb118cca401ad2170d34df39cff3ec317c2195","crunched":0,"start":63098,"end":63360,"audio":false},{"filename":".git/objects/05/1aaaf9874984f4378aee09c78e5e58d2027073","crunched":0,"start":63360,"end":88581,"audio":false},{"filename":".git/objects/05/a74b640021405914984808fb40ade5ef763b60","crunched":0,"start":88581,"end":88736,"audio":false},{"filename":".git/objects/06/9dccaab62a01d0ef403bedf41a6bb39220c93a","crunched":0,"start":88736,"end":88913,"audio":false},{"filename":".git/objects/06/a50f51521c39a33ff52998585278d05b032334","crunched":0,"start":88913,"end":89143,"audio":false},{"filename":".git/objects/07/9f90920af8ec6bd2719c5f97f8cf949dc00632","crunched":0,"start":89143,"end":89301,"audio":false},{"filename":".git/objects/08/13c832aa58bdef6ef67c6d62c6c07e2d142c9f","crunched":0,"start":89301,"end":89598,"audio":false},{"filename":".git/objects/08/64e6f4012ddb942ed5c82e1e4d9e1da91ce939","crunched":0,"start":89598,"end":89698,"audio":false},{"filename":".git/objects/08/f8f02f6759f0b84833b8aed002206d79ddc615","crunched":0,"start":89698,"end":6853626,"audio":false},{"filename":".git/objects/08/fee1487e2a0d586460ca641df5fe7dfbf378a3","crunched":0,"start":6853626,"end":6855576,"audio":false},{"filename":".git/objects/09/fb6fb86b57fa2879272078c0eaac8226237c35","crunched":0,"start":6855576,"end":6856002,"audio":false},{"filename":".git/objects/0a/2a82ce0352761fc823e23a5059fbe8b3b8e722","crunched":0,"start":6856002,"end":6856188,"audio":false},{"filename":".git/objects/0b/3899afdaa391ed95ff707866c6cc55885e72ee","crunched":0,"start":6856188,"end":6857536,"audio":false},{"filename":".git/objects/0b/5466baf8fc43e3122e636f088bc0efe4c1b15c","crunched":0,"start":6857536,"end":6858166,"audio":false},{"filename":".git/objects/0b/d4b5048d194e0373b43d5ddfaf0a377e9cf71a","crunched":0,"start":6858166,"end":6858794,"audio":false},{"filename":".git/objects/0c/f662774233fcb6ff1b429047b859e98f4afa49","crunched":0,"start":6858794,"end":6859477,"audio":false},{"filename":".git/objects/0c/f8407425cfab006a65429a541b0f918d6c01ad","crunched":0,"start":6859477,"end":6859662,"audio":false},{"filename":".git/objects/0d/6c76337cc43e6631b596b85d4fe97dd3d58495","crunched":0,"start":6859662,"end":6860571,"audio":false},{"filename":".git/objects/0e/44658f5cfc33befde76f7ef956e0ab61d1fb26","crunched":0,"start":6860571,"end":6862010,"audio":false},{"filename":".git/objects/0e/8041e076a16e0b5ed35213675e4653f788b1b4","crunched":0,"start":6862010,"end":6862912,"audio":false},{"filename":".git/objects/10/cac2853f7697e3ee0dd954f2118771c9836239","crunched":0,"start":6862912,"end":6864354,"audio":false},{"filename":".git/objects/10/cb13a65c1a52f1a4f4d21d772cc0f24ab9d2c1","crunched":0,"start":6864354,"end":6864752,"audio":false},{"filename":".git/objects/11/6eb7d6be857ae88d9684956371bc1b7c8f77a4","crunched":0,"start":6864752,"end":6867069,"audio":false},{"filename":".git/objects/12/5718d593fa97e5f383eb31044dad4e00337462","crunched":0,"start":6867069,"end":6867494,"audio":false},{"filename":".git/objects/13/9cd942281d1462584e510d71a3244c44a94461","crunched":0,"start":6867494,"end":6867890,"audio":false},{"filename":".git/objects/13/d46a6b36042da63e3cb0a5fcf1385147e1b25c","crunched":0,"start":6867890,"end":6868045,"audio":false},{"filename":".git/objects/14/0d3513bdbbcac8700d9ada82967086a6ba71f0","crunched":0,"start":6868045,"end":6868666,"audio":false},{"filename":".git/objects/14/ab65bc3017c4bda48713eda09da8243efe17f6","crunched":0,"start":6868666,"end":6869442,"audio":false},{"filename":".git/objects/15/947c0ad2ea40f00e25560b961ea45b8fdae400","crunched":0,"start":6869442,"end":6869633,"audio":false},{"filename":".git/objects/15/a1761e6b566879832ad9b75d9d41d44357c072","crunched":0,"start":6869633,"end":6869803,"audio":false},{"filename":".git/objects/16/d59932c35928442688e5bb95881f1b530433ca","crunched":0,"start":6869803,"end":6871490,"audio":false},{"filename":".git/objects/17/26ef3fdd9fc388567ba587d59a3e660250b841","crunched":0,"start":6871490,"end":6871659,"audio":false},{"filename":".git/objects/17/5d63946cbf66cccca1eb56754bd599d5b0d421","crunched":0,"start":6871659,"end":6871858,"audio":false},{"filename":".git/objects/17/f07528d2ede8fa83214373c38c10aec1285a43","crunched":0,"start":6871858,"end":6872035,"audio":false},{"filename":".git/objects/17/f4bc4e33f091c6e98ff596883015c0eb978b04","crunched":0,"start":6872035,"end":6872461,"audio":false},{"filename":".git/objects/18/2113c59d0ed05cc00937dd3b1feea605ba329d","crunched":0,"start":6872461,"end":6872754,"audio":false},{"filename":".git/objects/18/b4e1a81dde1aa22b659f805616fa55aa73caff","crunched":0,"start":6872754,"end":6873571,"audio":false},{"filename":".git/objects/19/0b7bff8d80afa4ff59d06ec5c9ed5a7a0e7a0b","crunched":0,"start":6873571,"end":6873725,"audio":false},{"filename":".git/objects/19/533111a3a84100136c014a2832757ada7d3f46","crunched":0,"start":6873725,"end":6874151,"audio":false},{"filename":".git/objects/19/56ff0e467750f58dcb3ea6711db16b43e36006","crunched":0,"start":6874151,"end":6874486,"audio":false},{"filename":".git/objects/19/fb1ef35d45da6d2575582c059701d4c068ef55","crunched":0,"start":6874486,"end":6874655,"audio":false},{"filename":".git/objects/1a/08721f49dfd7f134e306937db11fddb93c272d","crunched":0,"start":6874655,"end":6875052,"audio":false},{"filename":".git/objects/1b/2d8c028106a3638094db8d6b78fa872beaa8ea","crunched":0,"start":6875052,"end":6875241,"audio":false},{"filename":".git/objects/1b/5607c294432964ee9bd09f5061d97e164df634","crunched":0,"start":6875241,"end":6875430,"audio":false},{"filename":".git/objects/1c/29e7fa59ca7d19d038f4d00b7458680b0cdb31","crunched":0,"start":6875430,"end":6875611,"audio":false},{"filename":".git/objects/1c/9c077803c042e1a7c466c841ab4ddc0e83c1f6","crunched":0,"start":6875611,"end":6875882,"audio":false},{"filename":".git/objects/1d/0c2b40c8b7f1699d5e9d320ee0a1cdbd779dbc","crunched":0,"start":6875882,"end":6876252,"audio":false},{"filename":".git/objects/1d/a6a013299eeb10cf795aa64211a6344b4f2771","crunched":0,"start":6876252,"end":6876409,"audio":false},{"filename":".git/objects/1d/f3a1036a9f8d683962ad04b786073138b65093","crunched":0,"start":6876409,"end":6877219,"audio":false},{"filename":".git/objects/1f/564ccda907f79a0febc0c8768b162db541761b","crunched":0,"start":6877219,"end":6877381,"audio":false},{"filename":".git/objects/1f/ddf1cfe70e883fce6d81e3bb6d9d1059dc38c5","crunched":0,"start":6877381,"end":6877721,"audio":false},{"filename":".git/objects/20/3fc4db6e993ec411443d314a24d4070870bbb3","crunched":0,"start":6877721,"end":6878745,"audio":false},{"filename":".git/objects/22/3e086abe24287201d544df111351c191536bd0","crunched":0,"start":6878745,"end":6879576,"audio":false},{"filename":".git/objects/23/7f1c45ffd2b49e57fb1afdbd5a2ee866ce33f8","crunched":0,"start":6879576,"end":6879755,"audio":false},{"filename":".git/objects/23/834aed23b85cff81b9a7de47f93ad4fef8ccaf","crunched":0,"start":6879755,"end":6879913,"audio":false},{"filename":".git/objects/23/8dc3b1cc889e8e9aa0d0e7239a61233f0bea5a","crunched":0,"start":6879913,"end":6880113,"audio":false},{"filename":".git/objects/23/9848dfffbd097cb144531c9e92f5d2bb0710b3","crunched":0,"start":6880113,"end":6880410,"audio":false},{"filename":".git/objects/23/c8cf8beffe244478c38f3afacfc6d943530b07","crunched":0,"start":6880410,"end":6880565,"audio":false},{"filename":".git/objects/24/4f8e33989d0a24a1d9b8b0122b2982e995c2f8","crunched":0,"start":6880565,"end":6880740,"audio":false},{"filename":".git/objects/26/02d54c93630c650abc519f6dfcdf58030b7c10","crunched":0,"start":6880740,"end":6881367,"audio":false},{"filename":".git/objects/26/311e27c437068eb4b4f94132622a9db3b5363f","crunched":0,"start":6881367,"end":6881527,"audio":false},{"filename":".git/objects/26/918586b1dec127772cb89a9c99903697a1b799","crunched":0,"start":6881527,"end":6881697,"audio":false},{"filename":".git/objects/26/e2fc787d44b0b4ca9a2d5a7093fc9c996e2e1c","crunched":0,"start":6881697,"end":6882049,"audio":false},{"filename":".git/objects/27/9edc0c4d64b779597cb4d74a76bcc5ba9f0482","crunched":0,"start":6882049,"end":6882108,"audio":false},{"filename":".git/objects/28/8444f19d384c26386d38850cd4b80581e5b359","crunched":0,"start":6882108,"end":6883571,"audio":false},{"filename":".git/objects/2a/951e308966998c5ac35d97a36c39eb68187a69","crunched":0,"start":6883571,"end":6883725,"audio":false},{"filename":".git/objects/2a/9e464560d286e3afa27bf815246d6e8bba9358","crunched":0,"start":6883725,"end":6883947,"audio":false},{"filename":".git/objects/2c/9bd5a45737f65e38d8ee801e9b826577622a12","crunched":0,"start":6883947,"end":6884244,"audio":false},{"filename":".git/objects/2e/5589db847477d7f9b7d6db729f86e140912df3","crunched":0,"start":6884244,"end":6884417,"audio":false},{"filename":".git/objects/2e/d15c6cc525c8aedfbcb05648cf81a5a4d0e4fd","crunched":0,"start":6884417,"end":6896959,"audio":false},{"filename":".git/objects/2e/d446e2ed577915db6651d465173ac8c823e5a3","crunched":0,"start":6896959,"end":6897136,"audio":false},{"filename":".git/objects/2f/a78ffaf1b47e2679447438fdee5093c26ce7c7","crunched":0,"start":6897136,"end":6899007,"audio":false},{"filename":".git/objects/30/1c67432d1d2e07fcb4d8f0894d10a018a49cb2","crunched":0,"start":6899007,"end":6899404,"audio":false},{"filename":".git/objects/30/abf1ef9c3146e6d91dfc1fba305337049798e3","crunched":0,"start":6899404,"end":6899561,"audio":false},{"filename":".git/objects/33/c61a30fb2febfcdc2059496f1a2d49d94a3d19","crunched":0,"start":6899561,"end":6899814,"audio":false},{"filename":".git/objects/33/cea183b0e28a3d490ff4bb1689a79c0ea2199b","crunched":0,"start":6899814,"end":6900539,"audio":false},{"filename":".git/objects/33/f8f7a5b5b6c8816a1a1f48df5df49b7311bcc1","crunched":0,"start":6900539,"end":6901670,"audio":false},{"filename":".git/objects/34/bb17223923caf0f3e4381195fd4ac389015670","crunched":0,"start":6901670,"end":6902347,"audio":false},{"filename":".git/objects/35/36b038ab05679a142c5b2480303765b32aff11","crunched":0,"start":6902347,"end":6902744,"audio":false},{"filename":".git/objects/35/e01a2f4de9aeb02600833b490946abdc4a3207","crunched":0,"start":6902744,"end":6902904,"audio":false},{"filename":".git/objects/37/18359e59b2bfd610554e247aaf9921ee79f961","crunched":0,"start":6902904,"end":6904873,"audio":false},{"filename":".git/objects/37/4edfd737e2840a33b6e24ae8ae37b91f8e7cfd","crunched":0,"start":6904873,"end":6905298,"audio":false},{"filename":".git/objects/37/f92c2c1d277b4bc85b36ee1494f159c3dafb49","crunched":0,"start":6905298,"end":6905551,"audio":false},{"filename":".git/objects/39/560d9b5c14f3089db63ba02db9784cb3d8b08e","crunched":0,"start":6905551,"end":6905712,"audio":false},{"filename":".git/objects/3a/29e0d8207deb38d28c35753b38a3352c877a90","crunched":0,"start":6905712,"end":6906019,"audio":false},{"filename":".git/objects/3a/ac4349d01a51aef3fbc919c136bc65bc27231a","crunched":0,"start":6906019,"end":6907038,"audio":false},{"filename":".git/objects/3a/b8bfa1715bc84d7e71bb4e3b611f6e7e0b1a20","crunched":0,"start":6907038,"end":6907110,"audio":false},{"filename":".git/objects/3b/13673a1755982a1a0a5a9129a39094a49ed08d","crunched":0,"start":6907110,"end":6907266,"audio":false},{"filename":".git/objects/3c/133bb9ce5b6d3ca9207a3c5c51ba89ca9a5126","crunched":0,"start":6907266,"end":6908696,"audio":false},{"filename":".git/objects/3c/b352c9ca086fe3ec0d9575ce3453660da884dd","crunched":0,"start":6908696,"end":6909068,"audio":false},{"filename":".git/objects/3d/8124092d889deadf5d78acd470f6faedb77548","crunched":0,"start":6909068,"end":6909228,"audio":false},{"filename":".git/objects/3e/1b405c37200e4f514f047e7b7e4d6049f58d4e","crunched":0,"start":6909228,"end":6910672,"audio":false},{"filename":".git/objects/40/a92779fa86a328c558f041c1423e22af85d61c","crunched":0,"start":6910672,"end":6912084,"audio":false},{"filename":".git/objects/41/1911e7f95c632515bf310a2d4e295bc2afe965","crunched":0,"start":6912084,"end":6912381,"audio":false},{"filename":".git/objects/41/49f3f2ab1b27c7699a0aec2b17785e9413d915","crunched":0,"start":6912381,"end":6912746,"audio":false},{"filename":".git/objects/42/77760740b00bc7c57b9454089b1b91a3b09c29","crunched":0,"start":6912746,"end":6912929,"audio":false},{"filename":".git/objects/42/a085814526cc6f840f7a851707765d258b3328","crunched":0,"start":6912929,"end":6913617,"audio":false},{"filename":".git/objects/42/b5d0b60854aa3ec2e4ac9f21f0a2905db5600d","crunched":0,"start":6913617,"end":6914014,"audio":false},{"filename":".git/objects/43/a41f455f5b6a302d1d367cbbbb33ec5fe367fb","crunched":0,"start":6914014,"end":6914100,"audio":false},{"filename":".git/objects/43/aa6d33f1074f9c58ea20bda437d653d12fc05f","crunched":0,"start":6914100,"end":6914271,"audio":false},{"filename":".git/objects/43/cab4def1162f9443dc4fb161e5eee676d5de2f","crunched":0,"start":6914271,"end":6914481,"audio":false},{"filename":".git/objects/44/8b07b9d1fd44befd2c46385eb8922d3895b832","crunched":0,"start":6914481,"end":6915568,"audio":false},{"filename":".git/objects/44/fae64b8140602dbda76205756005200636a54b","crunched":0,"start":6915568,"end":6915607,"audio":false},{"filename":".git/objects/45/0132eb5f0d1f17cad7f46d53230f6b663937fc","crunched":0,"start":6915607,"end":6917076,"audio":false},{"filename":".git/objects/45/0f7adfedeb53558a1c8789eee082b437dbdb29","crunched":0,"start":6917076,"end":6917679,"audio":false},{"filename":".git/objects/46/15d85e59a9ca8c3b76bdd0140e675ac53289d8","crunched":0,"start":6917679,"end":6917876,"audio":false},{"filename":".git/objects/47/b245b0ab1f87213f3546fc61464a6b25790aea","crunched":0,"start":6917876,"end":6918142,"audio":false},{"filename":".git/objects/49/802f4598f2be395d27a900d9003ce1d9250b5a","crunched":0,"start":6918142,"end":6918318,"audio":false},{"filename":".git/objects/49/cf279c3688437b55fc7dd93d8b3c9cb42ccdb5","crunched":0,"start":6918318,"end":6918854,"audio":false},{"filename":".git/objects/4a/5131a5d9965a6f33a587124d0a57a356cc2b70","crunched":0,"start":6918854,"end":6919162,"audio":false},{"filename":".git/objects/4a/744d92e5dd67609d97792ad05c561ccbacde2c","crunched":0,"start":6919162,"end":6919427,"audio":false},{"filename":".git/objects/4b/943155369f02392f9a11371f9fbd692c74e9b7","crunched":0,"start":6919427,"end":6919621,"audio":false},{"filename":".git/objects/4d/0cbb407611d5a7c1e9e7e527652e6aa891675d","crunched":0,"start":6919621,"end":6920634,"audio":false},{"filename":".git/objects/4d/fac58d06e1ddda57c28e36f7439ac7f22433b9","crunched":0,"start":6920634,"end":6920976,"audio":false},{"filename":".git/objects/4f/00c417511de45804ae5438e9b9e74862e1681f","crunched":0,"start":6920976,"end":6923179,"audio":false},{"filename":".git/objects/4f/2c6813a325437fb2ace2758d5b5c5e98dc50a1","crunched":0,"start":6923179,"end":6927096,"audio":false},{"filename":".git/objects/4f/4e2da8385ab001084bbb919f53962d0109168a","crunched":0,"start":6927096,"end":6927197,"audio":false},{"filename":".git/objects/4f/acb23cc31e8ec6b6b63ac3c10a6117b53e4294","crunched":0,"start":6927197,"end":6927376,"audio":false},{"filename":".git/objects/4f/d41d5896d1ddb86e75e02201a31e6ce11a1720","crunched":0,"start":6927376,"end":6927544,"audio":false},{"filename":".git/objects/50/78390e400cf11d5b9ce22f0360a953927c382b","crunched":0,"start":6927544,"end":6927706,"audio":false},{"filename":".git/objects/50/bbd922653d609fceeef4ea1f9118f3a25981db","crunched":0,"start":6927706,"end":6928733,"audio":false},{"filename":".git/objects/53/6f2502a65929940ee803864e06545aff71818c","crunched":0,"start":6928733,"end":6929127,"audio":false},{"filename":".git/objects/53/c0db02f73d4a4ae5a3b5cfb23fd5a059d05511","crunched":0,"start":6929127,"end":6929209,"audio":false},{"filename":".git/objects/55/8ae3e44342f67218e3400a0d6145d6fa67482c","crunched":0,"start":6929209,"end":6929388,"audio":false},{"filename":".git/objects/55/8f58b3a36738dc563e781868b149dd9001b7b4","crunched":0,"start":6929388,"end":6930197,"audio":false},{"filename":".git/objects/55/a5996da81406e5dd5e3452cbdd09e7dded2e60","crunched":0,"start":6930197,"end":6930535,"audio":false},{"filename":".git/objects/55/c2593268ff92c0cfcd8198e4d0324731a678a1","crunched":0,"start":6930535,"end":6931899,"audio":false},{"filename":".git/objects/56/97a259e00b48f83e81adbe92cca65a44dd8e0f","crunched":0,"start":6931899,"end":6932093,"audio":false},{"filename":".git/objects/57/0f4fbef651ad52bcbf3278bbd020d2a1968d48","crunched":0,"start":6932093,"end":6932911,"audio":false},{"filename":".git/objects/59/bb1bd85c929d5108c7011c9204166cca099dcd","crunched":0,"start":6932911,"end":6934016,"audio":false},{"filename":".git/objects/5a/03dac572b24b6bc41ff6f716eac093549a9858","crunched":0,"start":6934016,"end":6934516,"audio":false},{"filename":".git/objects/5a/f3fa607a2d12c843cc061a08514e69b0d51614","crunched":0,"start":6934516,"end":6936631,"audio":false},{"filename":".git/objects/5b/90c4744db55b44a5c458051f8e4e2674aeb053","crunched":0,"start":6936631,"end":6937460,"audio":false},{"filename":".git/objects/5d/0ee7f3c9e28f60c83d59c54a1934f2f55ea884","crunched":0,"start":6937460,"end":6937645,"audio":false},{"filename":".git/objects/5d/8d7b7d007d3f0a2e2245211ac99497dd0f194c","crunched":0,"start":6937645,"end":6937823,"audio":false},{"filename":".git/objects/5d/ef0e1e07a1617f6c534787b123c1edb20602f3","crunched":0,"start":6937823,"end":6938248,"audio":false},{"filename":".git/objects/5e/6e1eac43217e8017ee4d1663904924b8e23606","crunched":0,"start":6938248,"end":6938645,"audio":false},{"filename":".git/objects/60/0d5650495b870081d99852929b3db42cbad49f","crunched":0,"start":6938645,"end":6938717,"audio":false},{"filename":".git/objects/60/5dcff93579a598a574fcfc0c7f3caea64b6e52","crunched":0,"start":6938717,"end":6938905,"audio":false},{"filename":".git/objects/63/2ec7bc86356d4ab5890769afcc906ce105dc46","crunched":0,"start":6938905,"end":6940441,"audio":false},{"filename":".git/objects/63/7c245842119705051cf225e988d46b0bd21037","crunched":0,"start":6940441,"end":6977377,"audio":false},{"filename":".git/objects/64/214fdedb46308af407936521d0eadfd0de33a2","crunched":0,"start":6977377,"end":6977615,"audio":false},{"filename":".git/objects/64/84d94ae36f631a2c1fd1376fcb3e3b76c10da0","crunched":0,"start":6977615,"end":6978195,"audio":false},{"filename":".git/objects/64/b6ca817c97f1e402cb22e9acd519eb87ae8593","crunched":0,"start":6978195,"end":6978353,"audio":false},{"filename":".git/objects/65/0da58018788f4ae1353cf5f8c4c291a5d95305","crunched":0,"start":6978353,"end":6978580,"audio":false},{"filename":".git/objects/65/23c45fbc2d5cbb139ec0bf971c83d796566ad3","crunched":0,"start":6978580,"end":6978735,"audio":false},{"filename":".git/objects/65/e2bb85e931928e972a225448a021695483e5c6","crunched":0,"start":6978735,"end":6979037,"audio":false},{"filename":".git/objects/66/a8afc72ce43dc73ce90a8b2982843d1d32dc7e","crunched":0,"start":6979037,"end":6979462,"audio":false},{"filename":".git/objects/66/cb1be3cd50f139be1d9328b379e1d6bce52102","crunched":0,"start":6979462,"end":6979649,"audio":false},{"filename":".git/objects/68/e735f3c0c649bd241e05195de309c1f84724df","crunched":0,"start":6979649,"end":6979945,"audio":false},{"filename":".git/objects/69/3fe23b21a97495da50389bcb763188959b9537","crunched":0,"start":6979945,"end":6980369,"audio":false},{"filename":".git/objects/69/7b9faa97f2f91248d5c7aed3e460fb5eefb817","crunched":0,"start":6980369,"end":6980551,"audio":false},{"filename":".git/objects/6a/6dd33a806de2691540a6b7028d6299defc8440","crunched":0,"start":6980551,"end":6980916,"audio":false},{"filename":".git/objects/6a/c2b5d08be7af81b07059cb43248349fe301937","crunched":0,"start":6980916,"end":6981076,"audio":false},{"filename":".git/objects/6b/d6e1f0792bc5d0a559f8db9a4f741b93352159","crunched":0,"start":6981076,"end":6981693,"audio":false},{"filename":".git/objects/6b/f6601bd6784c6e18c90cbd0e158a0845715018","crunched":0,"start":6981693,"end":6981921,"audio":false},{"filename":".git/objects/6c/21e20b3c48b9c6b5a0ab9b2b0fd79be448cd48","crunched":0,"start":6981921,"end":6982051,"audio":false},{"filename":".git/objects/6c/63c98d714a64d2856125ab2fcc50aa3548ebfc","crunched":0,"start":6982051,"end":6982445,"audio":false},{"filename":".git/objects/6d/abca73626c3570131ed0eb80456ec9b2ccbd3a","crunched":0,"start":6982445,"end":6989779,"audio":false},{"filename":".git/objects/6e/0970bf6c785df5630e0fec90cbecd6dca76cf9","crunched":0,"start":6989779,"end":6990016,"audio":false},{"filename":".git/objects/6e/8df8895a5951620c0f5a921b2eed3f52f4f83c","crunched":0,"start":6990016,"end":6990202,"audio":false},{"filename":".git/objects/6f/617cb6e057ed7ff7bf4ece1d4dafa5fa19ce0b","crunched":0,"start":6990202,"end":6990473,"audio":false},{"filename":".git/objects/6f/d0a376decfbf0a7be87fdc75d5109da72a7d17","crunched":0,"start":6990473,"end":6990705,"audio":false},{"filename":".git/objects/6f/d79b543e47565558cc3f7b8ebb35b881c917e9","crunched":0,"start":6990705,"end":6990910,"audio":false},{"filename":".git/objects/70/3870da37a85b8b12e80ba78e75d7dd197c19fd","crunched":0,"start":6990910,"end":6991533,"audio":false},{"filename":".git/objects/70/623d0cda188087c0bb998eb87e092dd8e3360c","crunched":0,"start":6991533,"end":6991748,"audio":false},{"filename":".git/objects/71/15e67a7d170098f1b8159049efe6ce6bf0e2e6","crunched":0,"start":6991748,"end":6993560,"audio":false},{"filename":".git/objects/71/1a44a7458427ade5a26a3e998dfe8bdb85d964","crunched":0,"start":6993560,"end":6994570,"audio":false},{"filename":".git/objects/71/b9059f59d470b061de6d2edd75010519ed0224","crunched":0,"start":6994570,"end":7015434,"audio":false},{"filename":".git/objects/71/e859f0bbc29fbe393a1137ed2764e57b16aecc","crunched":0,"start":7015434,"end":7015618,"audio":false},{"filename":".git/objects/72/373edf2a8a021d4c1146be3a43d6d251f083fa","crunched":0,"start":7015618,"end":7015872,"audio":false},{"filename":".git/objects/72/baaa190cbf62685cdb59f8ba9f18cc36c14a30","crunched":0,"start":7015872,"end":7016775,"audio":false},{"filename":".git/objects/74/4c421587050c4d016ddb2f5239b0bed006c78e","crunched":0,"start":7016775,"end":7017622,"audio":false},{"filename":".git/objects/74/59ae422999ab0f39916168a16ceeaead4c489a","crunched":0,"start":7017622,"end":7018016,"audio":false},{"filename":".git/objects/74/b4bf7aab900cb84775c711193de7e194f620e5","crunched":0,"start":7018016,"end":7031446,"audio":false},{"filename":".git/objects/75/c445f53f52331660f13550d7635de2da5eba4a","crunched":0,"start":7031446,"end":7031600,"audio":false},{"filename":".git/objects/76/98fd6c0626d2d526df6e246a947e8c2112a9de","crunched":0,"start":7031600,"end":7032147,"audio":false},{"filename":".git/objects/76/a268b315663f19f2674c99bf9e3addcb8dbcbe","crunched":0,"start":7032147,"end":7058227,"audio":false},{"filename":".git/objects/76/b210629dd7ce7580f87b1dca3122f50f449317","crunched":0,"start":7058227,"end":7058388,"audio":false},{"filename":".git/objects/79/1481051e5f9c64f054e169478b277690872919","crunched":0,"start":7058388,"end":7059203,"audio":false},{"filename":".git/objects/79/9226077feeb151b787a7bc3bf177383b587a6a","crunched":0,"start":7059203,"end":7059358,"audio":false},{"filename":".git/objects/79/dedb467f8fcc514e5dfea417d5572767b4aed0","crunched":0,"start":7059358,"end":7059730,"audio":false},{"filename":".git/objects/7b/1e380dc6e44f586bc2ed0a19081e0ff43158b4","crunched":0,"start":7059730,"end":7059903,"audio":false},{"filename":".git/objects/7b/96fcdfee74286b6970dc76fda4639512b99bc8","crunched":0,"start":7059903,"end":7060058,"audio":false},{"filename":".git/objects/7c/d2fb67789790829b856f681030f6264363df77","crunched":0,"start":7060058,"end":7061938,"audio":false},{"filename":".git/objects/7d/161f27447ab3867b51d57c6c845f03bc9473d0","crunched":0,"start":7061938,"end":7063023,"audio":false},{"filename":".git/objects/7e/eaede56c63b1ad598584700dc047a18bc50574","crunched":0,"start":7063023,"end":7063363,"audio":false},{"filename":".git/objects/7f/ef831abc19debc6850fd64accc226c7abdc7dd","crunched":0,"start":7063363,"end":7063539,"audio":false},{"filename":".git/objects/7f/f27637b9d6b9cb67a64dc4219b3c53c78fe489","crunched":0,"start":7063539,"end":7066213,"audio":false},{"filename":".git/objects/80/2ac94d1ff76dfdef59fa3a109799776d23ccf3","crunched":0,"start":7066213,"end":7066296,"audio":false},{"filename":".git/objects/82/4a13ee8afbfcaf5bb0ce7b2013b9188e7b9017","crunched":0,"start":7066296,"end":7066483,"audio":false},{"filename":".git/objects/83/70ce49adfbec2831c476b77c27353c152b3084","crunched":0,"start":7066483,"end":7066658,"audio":false},{"filename":".git/objects/85/3e15b8757942ae8245cfbe91ae2cc30ebfc247","crunched":0,"start":7066658,"end":7066868,"audio":false},{"filename":".git/objects/85/52055185fdf2b9c500f9fa5d548a2a7a63e598","crunched":0,"start":7066868,"end":7067011,"audio":false},{"filename":".git/objects/86/2a8e9174cca98325e02ef312f7d5080d0ae42a","crunched":0,"start":7067011,"end":7069102,"audio":false},{"filename":".git/objects/87/f0309ed75afd46e719e3b2777b4d4f163554bf","crunched":0,"start":7069102,"end":7069470,"audio":false},{"filename":".git/objects/88/804d456298109599be3608f748174a2149409c","crunched":0,"start":7069470,"end":7069867,"audio":false},{"filename":".git/objects/88/8276497a56c9224d7cefee4ff54c629ce5a5d1","crunched":0,"start":7069867,"end":7070025,"audio":false},{"filename":".git/objects/88/8660c5e0ba997c668d66906ce0bc2ab9acd369","crunched":0,"start":7070025,"end":7071115,"audio":false},{"filename":".git/objects/89/12dd1e172869fc9dba363a39729d6f56bc23f8","crunched":0,"start":7071115,"end":7071592,"audio":false},{"filename":".git/objects/89/31f6efffc5f9e6a4823b8c536bc24ba3d031f9","crunched":0,"start":7071592,"end":7075829,"audio":false},{"filename":".git/objects/89/d657bfc494ccfa73b75510da082846629e35e9","crunched":0,"start":7075829,"end":7076254,"audio":false},{"filename":".git/objects/8a/31f168cce9eeaae8d6c0557f48ae93de1009d9","crunched":0,"start":7076254,"end":7076465,"audio":false},{"filename":".git/objects/8a/4b032c36f89536d1ee9c780ad66f057459a4b5","crunched":0,"start":7076465,"end":7076620,"audio":false},{"filename":".git/objects/8a/ad98905169beaf15b48be5e92b6d2d71d175e8","crunched":0,"start":7076620,"end":7077016,"audio":false},{"filename":".git/objects/8a/baed13d55e851a61132447a1b55740bac813ce","crunched":0,"start":7077016,"end":7077194,"audio":false},{"filename":".git/objects/8a/d7b6caf60882ed4cd67112cf75f44b47f9f0c4","crunched":0,"start":7077194,"end":7077422,"audio":false},{"filename":".git/objects/8b/02d1955b6d73e29bc5dfbd54bb7729a72f883f","crunched":0,"start":7077422,"end":7077807,"audio":false},{"filename":".git/objects/8b/1fbe2d1d9da783f5bdd8a76c67fd783bd05037","crunched":0,"start":7077807,"end":7078104,"audio":false},{"filename":".git/objects/8b/49d617fbc0b2ff778140a079114bc15bc803d7","crunched":0,"start":7078104,"end":7078285,"audio":false},{"filename":".git/objects/8b/95d5dc479f3ebb4bd9737a8de9b96f50110ba8","crunched":0,"start":7078285,"end":7080243,"audio":false},{"filename":".git/objects/8b/ec14a88373d73549721262beab7e4d4fa0d990","crunched":0,"start":7080243,"end":7080526,"audio":false},{"filename":".git/objects/8d/387e51f90308044c72507d2d46bfa269ca0106","crunched":0,"start":7080526,"end":7080854,"audio":false},{"filename":".git/objects/8f/f4609febad00524cc7636a8f3d78b0db518ce2","crunched":0,"start":7080854,"end":7081033,"audio":false},{"filename":".git/objects/91/1557543443c1e7457a12e0f05840f83b3fd62f","crunched":0,"start":7081033,"end":7081399,"audio":false},{"filename":".git/objects/91/a84fcf40aef9addae733a82cac140e53c1517c","crunched":0,"start":7081399,"end":7081796,"audio":false},{"filename":".git/objects/92/35f50a08ee909fdb8279d7056985c816bc7f53","crunched":0,"start":7081796,"end":7082698,"audio":false},{"filename":".git/objects/93/7d96ab64c3a738b210cc40cc614e649c09318e","crunched":0,"start":7082698,"end":7083573,"audio":false},{"filename":".git/objects/94/16e793fdbf19b3f5f95304fdda40f19e50084c","crunched":0,"start":7083573,"end":7084317,"audio":false},{"filename":".git/objects/94/ea6a2e42b74ea999256760f005378fc264470d","crunched":0,"start":7084317,"end":7084472,"audio":false},{"filename":".git/objects/95/37ca2f8facef269b9706530c83e12207ecaa9d","crunched":0,"start":7084472,"end":7084970,"audio":false},{"filename":".git/objects/95/684710b53daaa5d9a36781a64d2e903aa464f5","crunched":0,"start":7084970,"end":7085024,"audio":false},{"filename":".git/objects/95/8a47cffb6bb137c772c962bed49e46966d6986","crunched":0,"start":7085024,"end":7085204,"audio":false},{"filename":".git/objects/95/cd3590e3df60356b2caf9c036061dbfae18565","crunched":0,"start":7085204,"end":7086234,"audio":false},{"filename":".git/objects/96/a6bb9f1146ea1b9efe209270d1e781b8e8f27b","crunched":0,"start":7086234,"end":7086389,"audio":false},{"filename":".git/objects/97/03719e5ce9fbb1ab7d2e0216edcd59106aff82","crunched":0,"start":7086389,"end":7086729,"audio":false},{"filename":".git/objects/98/91996c4462c3c10bf45ff494b07e5fc8982da3","crunched":0,"start":7086729,"end":7086894,"audio":false},{"filename":".git/objects/99/69deb0272c46a9c648429f33558e53cf183294","crunched":0,"start":7086894,"end":7090104,"audio":false},{"filename":".git/objects/9a/03199d67084f4efe918ced25741910e93ea9b5","crunched":0,"start":7090104,"end":7090500,"audio":false},{"filename":".git/objects/9a/2b14a6d2b16279e4dc756bdb8ae44acbb90b1f","crunched":0,"start":7090500,"end":7091830,"audio":false},{"filename":".git/objects/9a/480d95ef6fee8dce7650c6d05822f8fc66e4b4","crunched":0,"start":7091830,"end":7092138,"audio":false},{"filename":".git/objects/9a/54ea5a2fb3bab4a37aea2bcab6c4b09020d554","crunched":0,"start":7092138,"end":7092197,"audio":false},{"filename":".git/objects/9a/57851fb8cbda4a02f48db0c13cd3322b55bc93","crunched":0,"start":7092197,"end":7092433,"audio":false},{"filename":".git/objects/9a/de9d9952d41c0f30f2f0a4c890b96156358b45","crunched":0,"start":7092433,"end":7092588,"audio":false},{"filename":".git/objects/9d/73307c5bd24f538c3f3df1dcf93c733bd4fb22","crunched":0,"start":7092588,"end":7092910,"audio":false},{"filename":".git/objects/9e/100b7fe37103ce7f5921f271f7589b434bf449","crunched":0,"start":7092910,"end":7104038,"audio":false},{"filename":".git/objects/9e/61a49bd9c721f00abb092c7ad2252a5f1e8354","crunched":0,"start":7104038,"end":7104211,"audio":false},{"filename":".git/objects/9f/09902b79a0d16f4487eff031b2dc2735914ff2","crunched":0,"start":7104211,"end":7104411,"audio":false},{"filename":".git/objects/9f/6bc50efc6d3b6cb8f805b5127dd4447c2eeb28","crunched":0,"start":7104411,"end":7104672,"audio":false},{"filename":".git/objects/9f/cffedfb951b359a352d8872c4e78b950cf8e7a","crunched":0,"start":7104672,"end":7106509,"audio":false},{"filename":".git/objects/a1/04f96c11d5fb4eff18de9d554fa627c97b77c1","crunched":0,"start":7106509,"end":7107583,"audio":false},{"filename":".git/objects/a1/3660f9300d6fe59a25648ac60e1aa77147bd0a","crunched":0,"start":7107583,"end":7107628,"audio":false},{"filename":".git/objects/a1/c45c961b66a2d49685cf1ef701693aaa699dbe","crunched":0,"start":7107628,"end":7143761,"audio":false},{"filename":".git/objects/a2/960fc45427f1b8a183646bb87c56f6ed2bf0e4","crunched":0,"start":7143761,"end":7144413,"audio":false},{"filename":".git/objects/a3/2e92aa6592d247384d67cd267297509c84c7fd","crunched":0,"start":7144413,"end":7144485,"audio":false},{"filename":".git/objects/a3/d2052f6276a02de366774622d127149c06d88f","crunched":0,"start":7144485,"end":7144672,"audio":false},{"filename":".git/objects/a4/b833f4a448b52eba5be2f804329c215e2a8bde","crunched":0,"start":7144672,"end":7144887,"audio":false},{"filename":".git/objects/a4/bc4a08407978e546aee340f03eaca09e49aaa4","crunched":0,"start":7144887,"end":7144988,"audio":false},{"filename":".git/objects/a6/44c4e3eda23d49403c282dd87cee0ca33fbc68","crunched":0,"start":7144988,"end":7145034,"audio":false},{"filename":".git/objects/a7/944b0a1794b93dc105d144a8b98a0badefbf04","crunched":0,"start":7145034,"end":7145240,"audio":false},{"filename":".git/objects/a7/b674a3c9d4c5984d55841a1a1eeed0c48985bd","crunched":0,"start":7145240,"end":7145437,"audio":false},{"filename":".git/objects/a7/eb671b2ab93132f00bd74a6cae4a7f471d7820","crunched":0,"start":7145437,"end":7146262,"audio":false},{"filename":".git/objects/a8/084b5bf2f0d779388626a7209a6b255a1d7aa2","crunched":0,"start":7146262,"end":7146528,"audio":false},{"filename":".git/objects/a8/0ba00c88bd90a5cf21a687d4768baa93f6d251","crunched":0,"start":7146528,"end":7146683,"audio":false},{"filename":".git/objects/a8/4140e01f6af079ba0b1c30af2551f276816eab","crunched":0,"start":7146683,"end":7148578,"audio":false},{"filename":".git/objects/a8/b1de15b2f4410352230040cd38a417c5a19f82","crunched":0,"start":7148578,"end":7150148,"audio":false},{"filename":".git/objects/a9/041f1b78d917ea1b2b0c7e6d7661021c24f56f","crunched":0,"start":7150148,"end":7151597,"audio":false},{"filename":".git/objects/aa/6539d2f126f5a8bbff81ec28489cb276498c4f","crunched":0,"start":7151597,"end":7151792,"audio":false},{"filename":".git/objects/aa/739c9ce2b1e6f54e9dec076d54138663a5bd69","crunched":0,"start":7151792,"end":7151864,"audio":false},{"filename":".git/objects/aa/c5e626fd69513dcc3c643d3049bdf649aaf790","crunched":0,"start":7151864,"end":7152130,"audio":false},{"filename":".git/objects/ab/9f99341113525e8d27741529ff7058cb7420b1","crunched":0,"start":7152130,"end":7152396,"audio":false},{"filename":".git/objects/ac/83015ea6f06d5bb9af3c4a0971e87e4863f886","crunched":0,"start":7152396,"end":7153069,"audio":false},{"filename":".git/objects/ad/1a48b42e777636c07855a97e39d252b0b9cc27","crunched":0,"start":7153069,"end":7153252,"audio":false},{"filename":".git/objects/ad/a563ad4a3c9691d79f01eba282b4fdbf72c6c5","crunched":0,"start":7153252,"end":7153470,"audio":false},{"filename":".git/objects/ae/3843d4cc7b5921828bc8caf8bd01de1096383c","crunched":0,"start":7153470,"end":7153779,"audio":false},{"filename":".git/objects/af/112996b97b4328fcd71e4706f8338f7dd3d9d9","crunched":0,"start":7153779,"end":7154205,"audio":false},{"filename":".git/objects/b0/5ac8cdfa111992562c4b1295bef2262e4d3387","crunched":0,"start":7154205,"end":7154496,"audio":false},{"filename":".git/objects/b0/db288c944a2188f508c4bb41719e361e526ea7","crunched":0,"start":7154496,"end":7154655,"audio":false},{"filename":".git/objects/b0/e96bebfb7e121558f5b23a90167f1b04e94af0","crunched":0,"start":7154655,"end":7155780,"audio":false},{"filename":".git/objects/b1/1987a294727ec283e42a8b0e813384a52bdbe0","crunched":0,"start":7155780,"end":7155951,"audio":false},{"filename":".git/objects/b1/7064881180f6e43c44105d2c580185124f9f35","crunched":0,"start":7155951,"end":7156106,"audio":false},{"filename":".git/objects/b2/a3dc79a508e5ee83f0ff5d9abb1266472f3df6","crunched":0,"start":7156106,"end":7156503,"audio":false},{"filename":".git/objects/b3/7519f685cfdb8dbf6629e677611bf22b2a5062","crunched":0,"start":7156503,"end":7156671,"audio":false},{"filename":".git/objects/b3/d6a241e0b413700abac7b5383961836e7b228c","crunched":0,"start":7156671,"end":7189211,"audio":false},{"filename":".git/objects/b6/ffbd69a5e9e52f1c550932abd9ecebda13d3df","crunched":0,"start":7189211,"end":7189637,"audio":false},{"filename":".git/objects/b7/0185338012c6543437ed57d5cd4bd8a56a8d5f","crunched":0,"start":7189637,"end":7189956,"audio":false},{"filename":".git/objects/b7/bce4784769cc79eeb5102a048d0710e775a95a","crunched":0,"start":7189956,"end":7191325,"audio":false},{"filename":".git/objects/b7/cfbd18b978cd5f1d4e6345a2d645512b7ead3b","crunched":0,"start":7191325,"end":7191485,"audio":false},{"filename":".git/objects/b7/d8fa3c03328387b029956e7456fc550cd1a162","crunched":0,"start":7191485,"end":7191838,"audio":false},{"filename":".git/objects/b8/a099f675b1bf83f7bd26cf06402aa6fa430c81","crunched":0,"start":7191838,"end":7192028,"audio":false},{"filename":".git/objects/b8/a73c158c24793644b1b7684c6ae3ffa611359c","crunched":0,"start":7192028,"end":7217407,"audio":false},{"filename":".git/objects/ba/0a1d4071fdbc8a1313eb3d7cff5d1612b1e450","crunched":0,"start":7217407,"end":7218670,"audio":false},{"filename":".git/objects/ba/c1d7c2ac65fffd92d28185bd9cd8a80ac32258","crunched":0,"start":7218670,"end":7219184,"audio":false},{"filename":".git/objects/bb/098fa45768136eb5dfbd0dea11b8733922defe","crunched":0,"start":7219184,"end":7219481,"audio":false},{"filename":".git/objects/bb/c7525e17762deacff9112551ad73e2802c515d","crunched":0,"start":7219481,"end":7219718,"audio":false},{"filename":".git/objects/bc/23aa0c1b8051dbe349c39764c008f3b09bdc28","crunched":0,"start":7219718,"end":7219898,"audio":false},{"filename":".git/objects/bc/442b00c2bd9ce3def4ae15ed0c7a02ad03c35a","crunched":0,"start":7219898,"end":7220053,"audio":false},{"filename":".git/objects/bc/c6b02038c7cd9c5b8864e751207bae3a0da5b9","crunched":0,"start":7220053,"end":7221230,"audio":false},{"filename":".git/objects/bd/1843aca261ae58b1117d2ae5bd13270a418633","crunched":0,"start":7221230,"end":7222060,"audio":false},{"filename":".git/objects/be/345d5a3e5093a1641295614a1361b6c5357eb1","crunched":0,"start":7222060,"end":7222237,"audio":false},{"filename":".git/objects/be/95c6267f1212777948dbfb4c40faf2323deade","crunched":0,"start":7222237,"end":7222421,"audio":false},{"filename":".git/objects/be/a69f96a663cf9a51f1fafb5b0ba9b6ea4b44b4","crunched":0,"start":7222421,"end":7222658,"audio":false},{"filename":".git/objects/be/c2ffe403c772ac75664e798f89869c2c940d02","crunched":0,"start":7222658,"end":7222833,"audio":false},{"filename":".git/objects/be/dad56c6080c263081128f034663c47fd56a7d1","crunched":0,"start":7222833,"end":7223156,"audio":false},{"filename":".git/objects/bf/7bf2ac41e02868ca3046fba4eb839db75bdc37","crunched":0,"start":7223156,"end":7223374,"audio":false},{"filename":".git/objects/bf/990c0907680b823cf52a1cbeeebb6333ccd677","crunched":0,"start":7223374,"end":7224535,"audio":false},{"filename":".git/objects/c0/7282f3ad230944a0beece4faee722065309e72","crunched":0,"start":7224535,"end":7224886,"audio":false},{"filename":".git/objects/c2/23ef4a17c4e17daa54874b963428e744975c0d","crunched":0,"start":7224886,"end":7225154,"audio":false},{"filename":".git/objects/c2/335a8f91d8f688d2fbbdfac4c512dd97fecb00","crunched":0,"start":7225154,"end":7225618,"audio":false},{"filename":".git/objects/c2/e59138fd519accb9e48f30d2d79a27e5c12184","crunched":0,"start":7225618,"end":7246510,"audio":false},{"filename":".git/objects/c3/0ababe66db99de18b7dbfee1630ccf30c45ad7","crunched":0,"start":7246510,"end":7246680,"audio":false},{"filename":".git/objects/c3/125c5e2ca88c767e1cbc77d63190a9bf158dd6","crunched":0,"start":7246680,"end":7247106,"audio":false},{"filename":".git/objects/c3/e5b6394664125e391149212f23992770d04fca","crunched":0,"start":7247106,"end":7247286,"audio":false},{"filename":".git/objects/c4/1999ed6e5cbc35447d6ddd57607871bb626270","crunched":0,"start":7247286,"end":7247507,"audio":false},{"filename":".git/objects/c4/85eafeec9489f8f7f549faa4884b50bae3ab4f","crunched":0,"start":7247507,"end":7247835,"audio":false},{"filename":".git/objects/c4/9cf1975b55446aaff0c928cb90b041b0192ac4","crunched":0,"start":7247835,"end":7248133,"audio":false},{"filename":".git/objects/c5/19417f3e340e747c85efe2dd69e1e629df87a9","crunched":0,"start":7248133,"end":7248912,"audio":false},{"filename":".git/objects/c5/365329cdb67956d4b0743b66c1a05414df2ac6","crunched":0,"start":7248912,"end":7249282,"audio":false},{"filename":".git/objects/c6/9341416993d34e4784cd2320ae34bbb5eb9fa6","crunched":0,"start":7249282,"end":7249437,"audio":false},{"filename":".git/objects/c8/26c32376aeeb110447706fae6b270d12ced419","crunched":0,"start":7249437,"end":7249566,"audio":false},{"filename":".git/objects/c8/299c4beea9d74443ab00e356d52604bddb5a59","crunched":0,"start":7249566,"end":7250485,"audio":false},{"filename":".git/objects/c8/60b08d151f125d8fe255f810602bd777a4bbd8","crunched":0,"start":7250485,"end":7251169,"audio":false},{"filename":".git/objects/ca/6555b1e8195a88dbe2127976c2b8ff6a8ca9c2","crunched":0,"start":7251169,"end":7251539,"audio":false},{"filename":".git/objects/cc/563b0d73b4ad9831b56482259b2d5a62ed5db2","crunched":0,"start":7251539,"end":7251767,"audio":false},{"filename":".git/objects/cd/cdbaeced1a9b03e7f5ebf33ae39eaa26f6ea69","crunched":0,"start":7251767,"end":7252064,"audio":false},{"filename":".git/objects/ce/0c15ff539c25d2402ed52199ed0675cc01b4a1","crunched":0,"start":7252064,"end":7252719,"audio":false},{"filename":".git/objects/ce/ebbc75a35b504fac1373fd38985a4439fd2536","crunched":0,"start":7252719,"end":7253531,"audio":false},{"filename":".git/objects/cf/571a07e3661d2c011547d0de107ef006e06861","crunched":0,"start":7253531,"end":7253711,"audio":false},{"filename":".git/objects/cf/6a171f6377744c89d89a5ea681af58bce32a53","crunched":0,"start":7253711,"end":7253867,"audio":false},{"filename":".git/objects/d0/1439b34b63830c482bfbbfcf32a900945f2541","crunched":0,"start":7253867,"end":7254041,"audio":false},{"filename":".git/objects/d0/7d6236798fb7c51824681f4a7c691a02597c28","crunched":0,"start":7254041,"end":7254603,"audio":false},{"filename":".git/objects/d0/d04542e94a4b312088c504c456ccf5bc68def9","crunched":0,"start":7254603,"end":7254911,"audio":false},{"filename":".git/objects/d1/051bb17314734271d85a07cd167e107bca4bb5","crunched":0,"start":7254911,"end":7255129,"audio":false},{"filename":".git/objects/d1/3096290be13b18422ad89a7c893442468e6f54","crunched":0,"start":7255129,"end":7255383,"audio":false},{"filename":".git/objects/d1/42a92668e92408cf8270215c30bb2dd9b49238","crunched":0,"start":7255383,"end":7255777,"audio":false},{"filename":".git/objects/d1/6b01ec31697eb54a1065ab53888fa2cfc660ff","crunched":0,"start":7255777,"end":7255932,"audio":false},{"filename":".git/objects/d3/1aa764845581a4251d069c1c4adf5786575e84","crunched":0,"start":7255932,"end":7256130,"audio":false},{"filename":".git/objects/d3/4f5443d90a9f73cd1939d75f1d466ef6444935","crunched":0,"start":7256130,"end":7256259,"audio":false},{"filename":".git/objects/d3/d57f8b273d5a4d133d135a429ef98cb45a6213","crunched":0,"start":7256259,"end":7258220,"audio":false},{"filename":".git/objects/d4/47e46f3d0aa414ab4dcd162f4dd1728bf6a2aa","crunched":0,"start":7258220,"end":7258408,"audio":false},{"filename":".git/objects/d4/6dd01876c6f60b683d803af4541b739e18f216","crunched":0,"start":7258408,"end":7259537,"audio":false},{"filename":".git/objects/d4/f94a5d4cbdc4ff314546ecc7f632b08c8fa50f","crunched":0,"start":7259537,"end":7259773,"audio":false},{"filename":".git/objects/d5/4a99a527aba215204fb3b751cd492094e32621","crunched":0,"start":7259773,"end":7260473,"audio":false},{"filename":".git/objects/d6/9ff269d337cf27b40ac2a62de6b11b3480fedc","crunched":0,"start":7260473,"end":7262327,"audio":false},{"filename":".git/objects/d7/e34d5ab9c778c01cd500ca846f7d66baeb97ad","crunched":0,"start":7262327,"end":7288378,"audio":false},{"filename":".git/objects/d8/59d376ae803222c1233b5e3d2cea5d7b34bb8b","crunched":0,"start":7288378,"end":7288775,"audio":false},{"filename":".git/objects/d8/aa60faaadc97041344308430fdd1660d9af952","crunched":0,"start":7288775,"end":7288977,"audio":false},{"filename":".git/objects/d9/6c70857bcb1bf53cb75e8de0509c73e9db6325","crunched":0,"start":7288977,"end":7291217,"audio":false},{"filename":".git/objects/d9/d0802bd85e27e090b9e14a396d92ee071a1919","crunched":0,"start":7291217,"end":7291396,"audio":false},{"filename":".git/objects/da/9e0e14f98f429e77d61194af0c7671f2a6b289","crunched":0,"start":7291396,"end":7291555,"audio":false},{"filename":".git/objects/da/dc1d9db08194f1a1e3124022c787ec5b61b5aa","crunched":0,"start":7291555,"end":7291614,"audio":false},{"filename":".git/objects/da/e8d1ff62ffd3bd6cb61c4e657fcd9e75ed8057","crunched":0,"start":7291614,"end":7291780,"audio":false},{"filename":".git/objects/db/4470bcedbd2ca1397c00f5f6508bfa7236ee6a","crunched":0,"start":7291780,"end":7293232,"audio":false},{"filename":".git/objects/db/56787e3b2ddfd41abb5536e90ea1d1bf04ec97","crunched":0,"start":7293232,"end":7294620,"audio":false},{"filename":".git/objects/db/e6c3b627202a2fe4265892d5471fe092130d89","crunched":0,"start":7294620,"end":7295046,"audio":false},{"filename":".git/objects/dc/12597858693b70e861a08551dc06e0bf324c92","crunched":0,"start":7295046,"end":7295946,"audio":false},{"filename":".git/objects/dc/cf850265f5d5345ac58231293ef75371e1d3e4","crunched":0,"start":7295946,"end":7296310,"audio":false},{"filename":".git/objects/de/5da68b643282db497b55a888b7f939c10610b7","crunched":0,"start":7296310,"end":7296610,"audio":false},{"filename":".git/objects/de/bc9cdaef3029a9b01a7c732afde829937895c3","crunched":0,"start":7296610,"end":7296818,"audio":false},{"filename":".git/objects/e0/89ed5ae854416f4248d986ecbb313705239e64","crunched":0,"start":7296818,"end":7296997,"audio":false},{"filename":".git/objects/e0/ab9377d58741b230787cbfd8895a12b353d48e","crunched":0,"start":7296997,"end":7297157,"audio":false},{"filename":".git/objects/e3/44b37fb24f6aae3f735c6eb67bf34147794c3f","crunched":0,"start":7297157,"end":7297583,"audio":false},{"filename":".git/objects/e4/50801b56148fdf64d302e55b35e3383d9c151b","crunched":0,"start":7297583,"end":7297947,"audio":false},{"filename":".git/objects/e5/5941d1dab0afaa5be7d3e1830d23e74d197d55","crunched":0,"start":7297947,"end":7298868,"audio":false},{"filename":".git/objects/e5/8c4b066312f6efee41f2276c70a5bac7bc3251","crunched":0,"start":7298868,"end":7299085,"audio":false},{"filename":".git/objects/e6/370f3b30f19bf06eb71181b5edc4b6ec3791b6","crunched":0,"start":7299085,"end":7299510,"audio":false},{"filename":".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391","crunched":0,"start":7299510,"end":7299525,"audio":false},{"filename":".git/objects/e7/15acbdcf3d988887e9595930b4b7bef40b0f55","crunched":0,"start":7299525,"end":7299950,"audio":false},{"filename":".git/objects/ea/18564ee80a3addcb6fc58da77cfb80edb4737f","crunched":0,"start":7299950,"end":7300140,"audio":false},{"filename":".git/objects/eb/66cf070eacece6e425fd6d482f22bb223ea198","crunched":0,"start":7300140,"end":7300537,"audio":false},{"filename":".git/objects/eb/bb330d8879bb320a020d2efe8d986806aa150b","crunched":0,"start":7300537,"end":7302817,"audio":false},{"filename":".git/objects/ec/096848569d42a98d444dbf0015438b4efd7874","crunched":0,"start":7302817,"end":7303189,"audio":false},{"filename":".git/objects/ec/aa25a65b37a9cfb38fd893e75c26d9c7f9b1b9","crunched":0,"start":7303189,"end":7303359,"audio":false},{"filename":".git/objects/ed/26f6752f68b7a5509ec4677f84706375ae79c4","crunched":0,"start":7303359,"end":7303688,"audio":false},{"filename":".git/objects/ed/5377a3adcd5b3dd1559bb62242ec3096573255","crunched":0,"start":7303688,"end":7303870,"audio":false},{"filename":".git/objects/ef/161e386dbbbd9cf4bcae5952c7bc201f416f62","crunched":0,"start":7303870,"end":7304025,"audio":false},{"filename":".git/objects/ef/eea4fa7e629155970143af3b8cebeaf9ed55b4","crunched":0,"start":7304025,"end":7304431,"audio":false},{"filename":".git/objects/f0/a05ccf53562beb8907bc461e85acc1371b0627","crunched":0,"start":7304431,"end":7304581,"audio":false},{"filename":".git/objects/f1/c0bab724008e2456202f37af7101c9762e7065","crunched":0,"start":7304581,"end":7304639,"audio":false},{"filename":".git/objects/f3/b1696a078e36a55222967f64b33aaa3f1c46ee","crunched":0,"start":7304639,"end":7304783,"audio":false},{"filename":".git/objects/f3/da3647c728e38353bc14827fdd74aac8d3c5c1","crunched":0,"start":7304783,"end":7305421,"audio":false},{"filename":".git/objects/f4/6cd1f53edfc93491ab5640b11dbf7666a64368","crunched":0,"start":7305421,"end":7305843,"audio":false},{"filename":".git/objects/f5/4a9e4fd3816b87890feb5cff60153bec0b6355","crunched":0,"start":7305843,"end":7305944,"audio":false},{"filename":".git/objects/f6/066e831e23a8bd6af2f107d5264be6af4b88f5","crunched":0,"start":7305944,"end":7306180,"audio":false},{"filename":".git/objects/f6/63b65372cd659c5a9b038726d5b9ca4180e261","crunched":0,"start":7306180,"end":7306962,"audio":false},{"filename":".git/objects/f6/df5d4c8c9dfbfb9f90db46f81abaca9cc8c677","crunched":0,"start":7306962,"end":7307155,"audio":false},{"filename":".git/objects/f7/274f9e856e542da44ff7036c12149fd20727a9","crunched":0,"start":7307155,"end":7307363,"audio":false},{"filename":".git/objects/f7/b0e74b42df480b0242bc56f8c328c12d1dbe56","crunched":0,"start":7307363,"end":7307660,"audio":false},{"filename":".git/objects/f7/c70198332abb7ca7abf26bda39067b296cc634","crunched":0,"start":7307660,"end":7308548,"audio":false},{"filename":".git/objects/f8/6f119cc8c0e2aaee2259e473bb28d2510db440","crunched":0,"start":7308548,"end":7308733,"audio":false},{"filename":".git/objects/f8/e3da2f33818fc480b7abf7e7988051299064dc","crunched":0,"start":7308733,"end":7308888,"audio":false},{"filename":".git/objects/f9/1313ce9d5b7fe6c3146927d478894c59d21f89","crunched":0,"start":7308888,"end":7310339,"audio":false},{"filename":".git/objects/f9/4d58e6e13825b3d5b5d6062e0635783ee937ba","crunched":0,"start":7310339,"end":7310515,"audio":false},{"filename":".git/objects/f9/b4cdbbda9d853f8088a53efb229a4b42faf417","crunched":0,"start":7310515,"end":7310855,"audio":false},{"filename":".git/objects/fb/291eb38a69451399be04ae0e2611d3bdc55e5d","crunched":0,"start":7310855,"end":7311121,"audio":false},{"filename":".git/objects/fb/579f4a9f84d52962929da91550de53ec8642af","crunched":0,"start":7311121,"end":7311338,"audio":false},{"filename":".git/objects/fc/83ce3003a0b9040f1a33681fb755bcf2de430f","crunched":0,"start":7311338,"end":7311501,"audio":false},{"filename":".git/objects/fd/35a727bf4001ff95e5bf046da7de983216806a","crunched":0,"start":7311501,"end":7313693,"audio":false},{"filename":".git/objects/fd/d55b03c3d2bed4823685159f3a70e629c0fe17","crunched":0,"start":7313693,"end":7314498,"audio":false},{"filename":".git/objects/ff/0c1f23544a3ed55304f9b85525765ba1dbcb81","crunched":0,"start":7314498,"end":7314733,"audio":false},{"filename":".git/objects/ff/b4b8f295ee3e3ee0abd804bf183c4bd7f76d1c","crunched":0,"start":7314733,"end":7314906,"audio":false},{"filename":".git/objects/ff/febb832b1bae9e4377968cfc04a27ef236d628","crunched":0,"start":7314906,"end":7315069,"audio":false},{"filename":".git/packed-refs","crunched":0,"start":7315069,"end":7315183,"audio":false},{"filename":".git/refs/heads/daniel-animate-piggy","crunched":0,"start":7315183,"end":7315224,"audio":false},{"filename":".git/refs/heads/daniel-fix-reset-flicker","crunched":0,"start":7315224,"end":7315265,"audio":false},{"filename":".git/refs/heads/daniel-main-edits","crunched":0,"start":7315265,"end":7315306,"audio":false},{"filename":".git/refs/heads/daniel-map-data","crunched":0,"start":7315306,"end":7315347,"audio":false},{"filename":".git/refs/heads/daniel-map-loading","crunched":0,"start":7315347,"end":7315388,"audio":false},{"filename":".git/refs/heads/master","crunched":0,"start":7315388,"end":7315429,"audio":false},{"filename":".git/refs/remotes/origin/HEAD","crunched":0,"start":7315429,"end":7315461,"audio":false},{"filename":".git/refs/remotes/origin/Natasha2","crunched":0,"start":7315461,"end":7315502,"audio":false},{"filename":".git/refs/remotes/origin/daniel-animate-piggy","crunched":0,"start":7315502,"end":7315543,"audio":false},{"filename":".git/refs/remotes/origin/daniel-array-bounds-fix","crunched":0,"start":7315543,"end":7315584,"audio":false},{"filename":".git/refs/remotes/origin/daniel-fix-reset-flicker","crunched":0,"start":7315584,"end":7315625,"audio":false},{"filename":".git/refs/remotes/origin/daniel-main-edits","crunched":0,"start":7315625,"end":7315666,"audio":false},{"filename":".git/refs/remotes/origin/daniel-map-data","crunched":0,"start":7315666,"end":7315707,"audio":false},{"filename":".git/refs/remotes/origin/kyle","crunched":0,"start":7315707,"end":7315748,"audio":false},{"filename":".git/refs/remotes/origin/master","crunched":0,"start":7315748,"end":7315789,"audio":false},{"filename":".gitignore","crunched":0,"start":7315789,"end":7316123,"audio":false},{"filename":"LICENSE","crunched":0,"start":7316123,"end":7317224,"audio":false},{"filename":"README.md","crunched":0,"start":7317224,"end":7317247,"audio":false},{"filename":"asset/.DS_Store","crunched":0,"start":7317247,"end":7327491,"audio":false},{"filename":"asset/bgm/roots.mp3","crunched":0,"start":7327491,"end":14549903,"audio":true},{"filename":"asset/fonts/OFL.txt","crunched":0,"start":14549903,"end":14554402,"audio":false},{"filename":"asset/fonts/Sniglet-ExtraBold.ttf","crunched":0,"start":14554402,"end":14628630,"audio":false},{"filename":"asset/fonts/Sniglet-Regular.ttf","crunched":0,"start":14628630,"end":14703842,"audio":false},{"filename":"asset/img/.DS_Store","crunched":0,"start":14703842,"end":14709990,"audio":false},{"filename":"asset/img/16x16SquareSheet.png","crunched":0,"start":14709990,"end":14712293,"audio":false},{"filename":"asset/img/Title.png","crunched":0,"start":14712293,"end":14746807,"audio":false},{"filename":"asset/img/piggysheet.png","crunched":0,"start":14746807,"end":14774110,"audio":false},{"filename":"asset/img/squareReferenceSheet.png","crunched":0,"start":14774110,"end":14774358,"audio":false},{"filename":"asset/img/square_blue.png","crunched":0,"start":14774358,"end":14774539,"audio":false},{"filename":"asset/img/square_green.png","crunched":0,"start":14774539,"end":14774720,"audio":false},{"filename":"asset/img/square_red.png","crunched":0,"start":14774720,"end":14774901,"audio":false},{"filename":"asset/img/square_yellow.png","crunched":0,"start":14774901,"end":14775083,"audio":false},{"filename":"asset/map/level1.json","crunched":0,"start":14775083,"end":14780111,"audio":false},{"filename":"asset/map/level1.lua","crunched":0,"start":14780111,"end":14786044,"audio":false},{"filename":"asset/map/level1test.json","crunched":0,"start":14786044,"end":14791072,"audio":false},{"filename":"asset/map/level2.json","crunched":0,"start":14791072,"end":14796103,"audio":false},{"filename":"asset/map/level2.lua","crunched":0,"start":14796103,"end":14802041,"audio":false},{"filename":"asset/map/level3.json","crunched":0,"start":14802041,"end":14807069,"audio":false},{"filename":"asset/map/level3.lua","crunched":0,"start":14807069,"end":14813002,"audio":false},{"filename":"asset/map/level4.json","crunched":0,"start":14813002,"end":14818033,"audio":false},{"filename":"asset/map/level4.lua","crunched":0,"start":14818033,"end":14823969,"audio":false},{"filename":"asset/map/tutorial.json","crunched":0,"start":14823969,"end":14828997,"audio":false},{"filename":"asset/map/tutorial.lua","crunched":0,"start":14828997,"end":14834930,"audio":false},{"filename":"asset/vector/piggysheet.svg","crunched":0,"start":14834930,"end":14957074,"audio":false},{"filename":"conf.lua","crunched":0,"start":14957074,"end":14957186,"audio":false},{"filename":"endbox.lua","crunched":0,"start":14957186,"end":14957864,"audio":false},{"filename":"gamepad.lua","crunched":0,"start":14957864,"end":14959063,"audio":false},{"filename":"lib/Camera.lua","crunched":0,"start":14959063,"end":14973825,"audio":false},{"filename":"lib/anim8.lua","crunched":0,"start":14973825,"end":14982317,"audio":false},{"filename":"lib/bump.lua","crunched":0,"start":14982317,"end":15003721,"audio":false},{"filename":"lib/gamestate.lua","crunched":0,"start":15003721,"end":15007270,"audio":false},{"filename":"lib/scene.lua","crunched":0,"start":15007270,"end":15008001,"audio":false},{"filename":"lib/sti/graphics.lua","crunched":0,"start":15008001,"end":15010000,"audio":false},{"filename":"lib/sti/init.lua","crunched":0,"start":15010000,"end":15048584,"audio":false},{"filename":"lib/sti/plugins/box2d.lua","crunched":0,"start":15048584,"end":15056759,"audio":false},{"filename":"lib/sti/plugins/bump.lua","crunched":0,"start":15056759,"end":15062574,"audio":false},{"filename":"lib/sti/utils.lua","crunched":0,"start":15062574,"end":15067302,"audio":false},{"filename":"lib/tween.lua","crunched":0,"start":15067302,"end":15079881,"audio":false},{"filename":"main.lua","crunched":0,"start":15079881,"end":15080136,"audio":false},{"filename":"mapdata.lua","crunched":0,"start":15080136,"end":15084941,"audio":false},{"filename":"player.lua","crunched":0,"start":15084941,"end":15087604,"audio":false},{"filename":"scenes/endscreen.lua","crunched":0,"start":15087604,"end":15088631,"audio":false},{"filename":"scenes/levellogic.lua","crunched":0,"start":15088631,"end":15095462,"audio":false},{"filename":"scenes/menu.lua","crunched":0,"start":15095462,"end":15097564,"audio":false},{"filename":"scenes/tutorial.lua","crunched":0,"start":15097564,"end":15097801,"audio":false}]});

})();
