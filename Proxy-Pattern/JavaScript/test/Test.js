"use strict";

var ServiceFactory = require("./../src/ServiceFactory");
var File = require("./../src/File");
var FileHandlerProxy = require("./../src/FileHandlerProxy");

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
            assert.notDeepEqual(new FileHandlerProxy(), filehandler);
        });
    }); 
});


describe('FileTest', function() {     
    describe('#fileNameTest', function() {
        it('file should have values File', function() {
            let file = new File("Secret file");
            assert.equal("Secret file", file.filename);
        });
    });
});


describe('FileHandlerDeleteTest', function () {
    
    let filehandler = new ServiceFactory().createFileHandler();
    let file1 = new File("testfile1");
    let file2 = new File("testfile2");
    
    describe('deleteFile', function () {
        before(function () {
            filehandler.insertFile(file1);
        });
        it('filehandler should delete specific file in database', function () {
                filehandler.deleteFile(file1);
        });
        after(function () {
            filehandler.findFilebyFilename(file1, function (data) {
                setTimeout(function (done) {
                    assert.equal(null, data);
                    done();
                }, 5000);
            });
        });
    });
    
    describe('#deleteAll', function () {
        before(function () {
            filehandler.insertFile(file1);
            filehandler.insertFile(file2);
        });
        it('filehandler should delete all files in database', function () {
                filehandler.deleteAll({});
        });
        after(function () {
            filehandler.findFilebyFilename(function (data) {
                setTimeout(function (done) {
                    assert.equal(null, data);
                    done();
                }, 5000);
            });
        });
    });
});


describe('FileHandlerFind', function () {

    let filehandler = new ServiceFactory().createFileHandler();
    let file1 = new File("testfile1");
    let file2 = new File("testfile2");

    describe('#findFilebyFilename', function () {
        before(function () {
            filehandler.insertFile(file1);
        });
        it('filehandler should find file in database by filename', function () {
            setTimeout(function (done) {
                filehandler.findFilebyFilename(file1, function (data) {
                    assert.deepEqual(file1, data);
                    done();
                });
            }, 5000);
        });
        after(function () {
             filehandler.deleteFile(file1);       
        });
    });

    describe('#findAll', function () {
        before(function () {
            filehandler.insertFile(file1);
            filehandler.insertFile(file2);
        });
        it('filehandler should find all files in database', function () {
            setTimeout(function (done) {
                filehandler.findAll(function (data) {
                    assert.equal(2, data.length);
                    assert.deepEqual(file1, data[0]);
                    assert.deepEqual(file2, data[1]);
                    done();
                });
            }, 5000);
        });
        after(function () {
             filehandler.deleteAll();       
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

