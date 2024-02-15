class Movie {
      constructor(title,studio,rating){
    	        this.title=title;
    	        this.studio=studio;
    	        this.rating =rating;
    	    }
    	    getmovie(){
    	        return `The Title of Movie is ${this.title}, and production studio ${this.studio}, and rating is PG ${this.rating}. `;
    	
    	    }
    	}
    	var m1 = new Movie("OKK","MR","4.5");	console.log(m1.getmovie());
