import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'vote';
    products = [
      { id: 1, name: 'Noodles', totalVotes: 0, likes: 0, dislikes: 0, img: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id: 2, name: 'French Fries', totalVotes: 0, likes: 0, dislikes: 0, img: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600'},
      { id: 3, name: 'Burger', totalVotes: 0, likes: 0, dislikes: 0, img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    ];

    // like(product: any) {
    //   console.log(product.liked);
    //   if (!product.liked) {
    //     product.likes++;
    //     if (product.likes + product.dislikes == 10) {
    //     product.liked = true;
    //     }
    //   }
    // }

    // dislike(product:any) {
    //   console.log(product.disliked);
    //   if (!product.disliked) {
    //     product.dislikes++;
    //     if (product.likes + product.dislikes == 10) {
    //     product.disliked = true;
    //     }
    //   }
    // }

    
    like(product: any) {
      console.log(product.liked);
      if(product.likes + product.dislikes !== 10)
      product.likes++;
    }

    dislike(product:any)
    {
      if(product.likes + product.dislikes !== 10)
        product.dislikes++;
    }

    totalVotes(product:any)
    {
      console.log(product.likes)
      if(product.likes + product.dislikes===10) {
      return true;
      }
      else {
      return false;
      }
    }

}
