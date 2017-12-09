"use strict";

var ServiceFactory = require("./ServiceFactory");
var File = require("./File");

var assert = require("assert");

describe('FactoryTest', function() {
  
    let servicefactory;
    let filehandler;
    
    before(function() {
        servicefactory = new ServiceFactory();
        filehandler = servicefactory.createFileHandler();
    });
    
    describe('#FactoryCreateTest', function() {
        it('default factory should be an instance of ServiceFactory', function() {
            assert.deepEqual(new ServiceFactory(), servicefactory);
        });
    }); 
    
    describe('#FileHandlerCreateTest', function() {
        it('filehandler should be an instance of FilehandlerProxy', function() {
            assert.notDeepEqual(servicefactory.createFileHandler(), filehandler);
        });
    }); 
});

describe('FileTest', function() {  
    describe('#fileIdTest', function() {
        it('file should have values File', function() {
            let file = new File("Secret file");
            assert.equal(1, file._id);
            assert.equal("Secret file", file.filename);
        });
    });
    
    describe('#fileNameTest', function() {
        it('file should have values File', function() {
            let file = new File("Secret file");
            assert.equal("Secret file", file.filename);
        });
    });
});


describe('FileHandlerDeleteTest', function () {

    let filehandler;
    let file;
    
    before(function () {
        filehandler = new ServiceFactory().createFileHandler();
        file = new File("testfile4");
        filehandler.insertFile(file);
    });
    
    describe('#deleteFile', function () {
        it('filehandler should delete specific file in database', function () {
            filehandler.deleteFile(file);
        });
    });

    describe('#deleteAll', function () {
        it('filehandler should delete all files in database', function () {
            filehandler.deleteAll({});
        });
    });
});



describe('FileHandlerSearchTest', function() {
  
    let filehandler;
    let file1;
    let file2;
    
    before(function() {
        filehandler = new ServiceFactory().createFileHandler();
        file1 = new File("testfile1");
        filehandler.insertFile(file1);
        file2 = new File("testfile2");
        filehandler.insertFile(file2);
    });
   
    
    describe('#findAll', function () {
        it('filehandler should find all files in database', function (done) {
            filehandler.findAll(function (data) {
                assert.equal(2, data.length);
                assert.deepEqual(file1, data[0]);
                assert.deepEqual(file2, data[1]); 
                done();
            });
        });
    });

    describe('#findFilebyFilename', function () {
        it('filehandler should find file in database by filename', function (done) {
            filehandler.findFilebyFilename(file1, function (data) {
                assert.deepEqual(file1, data);
                done();
            });
        });
    });
   
});


describe('FileHandlerUnsupportedTest', function() {
  
    let filehandler;
    
    before(function() {
        filehandler = new ServiceFactory().createFileHandler();
    });
    
    describe('#updateFile', function () {
        it('unsupported operation', function () {
            let file5 = new File("testfile5");
            assert.equal("Unsupported Operation", filehandler.updateFile(file5));
        });
    });
   
});

