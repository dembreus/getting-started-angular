import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "../authors.service";

@Component({
  selector: "app-authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.scss"]
})
export class AuthorsComponent implements OnInit {
  title: string = "Authors";
  count: number;
  authors: Array<string>;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.count = this.authors.length;
  }

  ngOnInit() {}
}
