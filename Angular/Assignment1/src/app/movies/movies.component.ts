import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  selectedMovie;
  Movies = [
    {
      imageUrl : 'https://boygeniusreport.files.wordpress.com/2019/04/avengers-endgame.jpg?quality=98&strip=all&w=1200',
      name : 'Avengers',
      rating: '10/10',
      desc: 'Avengers of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }, {
      // tslint:disable-next-line: max-line-length
      imageUrl : 'https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE5XFxcLzA1XFxcLzMwMTIzNzI3XFxcL2hhcnJ5LXBvdHRlci0yLmpwZ1wiLFwid2lkdGhcIjo3NjcsXCJoZWlnaHRcIjo0MzEsXCJkZWZhdWx0XCI6XCJodHRwczpcXFwvXFxcL3d3dy5qb2UuaWVcXFwvYXNzZXRzXFxcL2ltYWdlc1xcXC9qb2VcXFwvbm8taW1hZ2UucG5nP2lkPTI2NGEyZGJlMzcwZjJjNjc1ZmNkXCIsXCJvcHRpb25zXCI6W119IiwiaGFzaCI6IjI5YjgwMDYyODg2N2Y4ODA3MWQ1NzVkZTBmOTZkZTg3ZjNmNThmYjUifQ==/harry-potter-2.jpg',
      name : 'Harry Potter',
      rating: '10/10',
      desc: 'Harry Potter his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }, {
      imageUrl : 'http://images.newindianexpress.com/uploads/user/imagelibrary/2019/9/4/w900X450/Yash.jpg',
      name : 'KGF',
      rating: '10/10',
      desc: 'KGF his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }, {
      // tslint:disable-next-line: max-line-length
      imageUrl : 'https://viacom18-res.cloudinary.com/image/upload/f_auto,q_auto:low,fl_lossy/kimg/kimg/f2a92291eaab4d0893dc6accae17ae9b_1280X720.jpg',
      name : 'Kirik Party',
      rating: '10/10',
      desc: 'Kirik Party Deprived of his mighty hammer Mjolnir, Thor must escape the other side of the universe to save his home, Asgard, from Hela, the goddess of death.'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  getMovie(movie) {
    this.selectedMovie = movie;
    console.log(movie);
  }
}
