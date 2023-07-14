import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class ChartService {
  tempData = []

  data: any ;
  constructor(private http: HttpClient) {
  }

  fetchChartData() {
    this.http.get("https://new-n6osqbff7q-uc.a.run.app/data").subscribe(data => {
      console.log('DATA : ', data)
      this.data = data
    })
  }

  extractData(key: string, data: any) {
    if (data && data.length) {
      console.log("KUMAR : ", data.map((item: any) => (item[key])))
      return data.map((item: any) => (item[key]))
    }
  }

  extractColor(key: string, data: any) {
    if (data && data.length) {
      return data.map((item: any) => (item[key] === "Positive" ? "green" : item[key] === "Negative" ? "red" : "orange"))
    }
  }

  extractTimeData(key: string, data: any) {
    if (data && data.length) {
      console.log("KUMAR : ", data.map((item: any) => (item[key])))
      return data.map((item: any) => (moment(item[key]).format('HH:MM')));
    }
  }

  footer(tooltipItems: any, data: any) {
    return this.data[0].summary;
  };


}
