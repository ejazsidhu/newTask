import { Component, OnInit } from '@angular/core';
declare var jquery: any; declare var $: any;

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.togglefunction()
  }

  togglefunction() {
    $(document).ready(function () {

      $("#toggle-btn").click(function () {
        let w = $(window).width();

        if (w <= 1024) {
          $("#page").toggleClass("active-sm");
          $("#side-navbar").toggleClass("show-sm");
        }
        else {
          $("#page").toggleClass("active");
          $("#side-navbar").toggleClass("shrink");

        }


        $("span.mobileSpan").toggleClass('no-display');
        $("#noPadding").toggleClass('noPadding');


      });

    });
  }

}
