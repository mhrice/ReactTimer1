var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return{
    count: 0,
    timerStatus: 'paused'
    };
  },
  componentDidUpdate: function(prevProp, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
        switch(this.state.timerStatus){
          case 'started':
          this.startTimer();
          break;
          case 'stopped':
          this.setState({
            count: 0
          });
          case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
        }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount >= 0? newCount: 0
      });

    }, 1000);
  },
  handleStatusChange: function(newStatus) {
    if(newStatus!='stopped'){
      this.setState({
      timerStatus: newStatus
      });
    }
    else{
      this.setState({
      timerStatus: newStatus
      });
      this.setState({
      timerStatus: 'paused',
      count: 0
      });
    }
  },
  render: function(){
    var {count, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds = {count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
})
module.exports = Timer;
