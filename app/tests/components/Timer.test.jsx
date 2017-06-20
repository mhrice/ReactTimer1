var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', ()=>{
  it('should exist', ()=>{
    expect(Timer).toExist();
  });
  describe('handleTimerStart', ()=>{
    it('should set state to started and start timer', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      expect(timer.state.timerStatus).toBe('started')
      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001)
    });
  });
  describe('handleTimerPause', ()=>{
    it('should set state to paused and pause timer', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('paused');
      },1001)
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused')
        expect(timer.state.count).toBe(1);
        done();
      }, 2001)
    });
  });
  describe('handleTimerClear', ()=>{
    it('should set state to stopped and reset timer', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('stopped');
      },1001)
      setTimeout(() => {
        expect(timer.state.timerStatus).toBe('paused')
        expect(timer.state.count).toBe(0);
        done();
      }, 2001)
    });
  });
});
