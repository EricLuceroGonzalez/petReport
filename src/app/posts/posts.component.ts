import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { Post } from "./post.model";
import { map } from "rxjs/operators";
import "rxjs-compat";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgbDateStruct, NgbCalendar } from "@ng-bootstrap/ng-bootstrap";

import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { NgModule } from "@angular/core";
import { Observable } from "rxjs";
import { AgmCoreModule } from "@agm/core";
import { ViewChild } from "@angular/core";
// For importing JSON:
// import { GettingJSONService } from '../services/getJSON.service';
// import { GettingJSONService } from '../json.service';
// import { panamaData } from '../../assets/jsonFolder/panamaData.json';
import { Http, Response } from "@angular/http";
import { MatOptionSelectionChange } from "@angular/material";
// import { MdOptionSelectionChange} from '@angular/material';
// import * as provincesJSON from '/home/ericlucero/Dropbox/web-develop/EricLuceroGAngular/MeRobaron/src/assets/jsonFolder/panamaData.json';

// Select-Year and Month
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import * as moment from "moment";
export interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  // @ViewChild('gmap')
  // gmapElement: any;
  // map: google.maps.Map;

  public name: string;
  public lastname: string;
  public age: number;

  // public barreto =  moment('07/20/1988', 'MM/DD/YYYY').fromNow().split(' ')[0];

  form: FormGroup;
  title = "postComponent";
  latitude = 8.991880501957548;
  longitude = -79.50826200565837;
  locationChosen = false;

  startDate = new Date(2018, 10, 1);
  events: string[] = [];

  // Date-time
  public timeBind: Date;
  public dateBind: Date;
  public owlDate: Date;
  public owlTime: Date;
  //  mat-radio-group
  favoriteSeason: string;
  seasons: string[] = ["Winter"];

  // dt1
  // Min moment: February 12 2018, 10:30
  public minDate = new Date(2018, 1, 12, 10, 30);
  // Max moment: April 21 2018, 20:30
  public maxDate = new Date(2018, 3, 21, 20, 30);
  // start-viewDate
  public dateTime: Date;
  public startMoment = new Date(2019, 2, 3, 10, 30, 30);
  // start-viewDate

  data: any;
  // Comments
  public inputComment: string;

  // options
  selectedValue: string;
  // genders: Gender[];
  genders: Gender[] = [
    { value: "hembra", viewValue: "	Hembra	" },
    { value: "masculino", viewValue: "	Masculino	" },
    { value: "genderqueer", viewValue: "	Intergenero	" },
    { value: "hermafrodita", viewValue: "	Hemafrodita	" },
    { value: "neutro", viewValue: "	Neutro	" },
    { value: "tercer género", viewValue: "	Tercer Genero	" },
    { value: "intergénero", viewValue: "	Intergénero	" },
    { value: "genderfuck", viewValue: "	Genderfuck	" },
    { value: "nongender", viewValue: "	Sin Genero	" },
    { value: "agender", viewValue: "	Agenero	" },
    { value: "no binario", viewValue: "	No binario	" },
    { value: "transexual o trans", viewValue: "	Transexual	" },
    { value: "marimacho", viewValue: "	Marimacho	" },
    { value: "femme", viewValue: "	femme	" },
    { value: "hombre a mujer (MTF)	", viewValue: "	Hombre a mujer (MTF)	" },
    { value: "mujer a hombre (FTM)	", viewValue: "	Mujer a hombre (FTM)	" },
    { value: "interrogatorio	", viewValue: "	Indefinido	" }
  ];

  //
  arrCase: object[];
  Name: object[];
  provinces: object[];
  // Semester: object[];
  selectedProvince: string;
  selectedDistr: string;
  selectedCorr: string;
  choosenSub: any;
  choosenSubs = [];
  choosenSubsSubs = [];
  selectedProvinceSS: string;
  datas: any;

  // Sledsdalsdkja
  countries: Object;
  address: Object;
  selection: string;
  selection2: string;
  message: string;
  country: Object;
  sltdProv: string;

  jsonPartners: Object;
  partner: any;
  place;
  shit: Object;
  Object = Object;
  keys: String[];

  selectA: Object;
  selectB: Object;
  selectedA: any;
  y: Object;

  provincesJSON = require("../../assets/jsonFolder/panamaData.json");
  // selectedProv = this.provincesJSON[0];
  selectedProv: any;
  selectedDistrict: any;
  selectedCity: any;

  provinceSelected: any;
  provinceDistricts: any;
  provinceCity: any;
  provinceCityArray: any;
  // a: any;
  // Last Added
  public dateField: Date;
  public startBirthDate = new Date(2000, 1, 1);
  panelOpenState = false;
  public barreto = moment(this.dateField, "MM/DD/YYYY")
    .fromNow()
    .split(" ")[0];
  // Stepper:
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  // Bootstrap - TimePicker
  timePick = { hour: 13, minute: 30 };
  meridian = true;
  // Bootstrap - DatePicker
  model: NgbDateStruct;
  date: NgbDateStruct;
  // { day: 1, month: 1, year: 'number' };

  selectToday() {
    this.model = this.calendar.getToday();
  }
  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  constructor(
    private _formBuilder: FormBuilder,
    public http: Http,
    private calendar: NgbCalendar
  ) {}

  ngOnInit() {
    console.log("ngOnInit() !!!!!!!!!!!!!!!");
    console.log(this.startBirthDate.getDay);

    console.log("Provincias: ");
    console.log(this.provincesJSON);
    console.log("selectedProv");
    console.log(this.selectedProv);
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required]
    });
  }

  clickShit() {
    alert("Oh! Shit clicked");
  }

  onSelectedProvince(newProvince) {
    // this.selectedProv = newProvince;
    console.log("\n Here inside: onSelectedProvince()");
    console.log("this.selectedProv:  " + this.selectedProv);
    this.provinceSelected = this.provincesJSON.find(
      x => x.name === this.selectedProv
    );
    console.log("this.provinceSelected");
    console.log(this.provinceSelected);
    this.provinceDistricts = this.provinceSelected.distritos;
    console.log(this.provinceDistricts);
  }

  onSelectedDistrict(newDistrict) {
    console.log("\n onSelectedDistrict()");
    console.log("this.selectedDistrict: " + this.selectedDistrict);
    this.provinceCity = this.provinceDistricts.find(
      x => x.name === this.selectedDistrict
    );
    console.log("this.provinceCity");
    console.log(this.provinceCity);
    this.provinceCityArray = this.provinceCity.corregimientos;
    console.log(this.provinceCityArray);
  }

  onSelectedCity(newCity) {
    console.log("onSelectedCity()");
    console.log("this.selectedCity: " + this.selectedCity);
  }

  onSavePost() {
    console.log("You clicked SAVE");
    this.form.reset();
  }
  getBType(timeBind) {
    return typeof this.timeBind;
  }
}
