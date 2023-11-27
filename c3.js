class Movie{
    2	    constructor(title,studio,rating){
    3	        this.title=title;
    4	        this.studio=studio;
    5	        this.rating=rating;
    6	    }
    7	    getmovie(){
    8	        return `The Title of Movie is ${this.title}, and production studio ${this.studio}, and rating is ${this.rating}. `;
    9	
    10	    }
    11	}
    12	var m1 = new Movie("OKK","MR","4.5");
    13	console.log(m1.getmovie());