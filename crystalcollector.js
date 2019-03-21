$(document).ready(function () {
    var app = {
        getRandomValue: function (min, max) {
            return Math.floor(Math.random() * max) + min;
		},
		playerScore: 0,
		playerLoseScore: 0,
        targetValue: null,
        currentValue: null,
        crystals: [null,null,null,null], 
        start: function(){
            this.targetValue = this.getRandomValue(0,100);
			this.currentValue = 0;
            for(var i = 0; i < this.crystals.length; i++){
                this.crystals[i] = this.getRandomValue(1,50)
			}
			this.render();
		},
		handleClick: function(id){
			this.currentValue += this.crystals[id];
			console.log(this.currentValue);
			this.checkWin();
		},
		checkWin: function(){
			if (this.currentValue === this.targetValue){
				this.playerScore++;
				this.start();
			} else if (this.currentValue > this.targetValue){
				this.start();
				this.playerLoseScore++;
			} else {
				console.log("hit")
				this.render();
			}
		},
		render: function(){
			console.log($("#currentValue"))
			$("#targetValue").text(this.targetValue);
			$("#playerScore").text(this.playerScore);
			$("#playerLoseScore").text(this.playerLoseScore);
			$("#currentValue").text(this.currentValue);	
		}
   }

   $(".crystal").click(function(){
	   var id = parseInt($(this).attr("id"));
	   app.handleClick(id);
   })

  app.start(); 
});