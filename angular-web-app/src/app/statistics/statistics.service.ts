import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StatisticsService {

    constructor(private http: HttpClient) { }
}