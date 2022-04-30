# Retrival of Orders from Baotou's Supermarkets/Malls
__Project Created: October 2020__  
Created for: Business  
Status: Operating/Online

## Tools
+ Vue.js
+ Electron
+ TypeScript
+ Mongodb
+ WebSocket
+ Puppeteer

## Project Description
The system is created for the automatic order retrieval of supermarkets and malls using API and Crawlers. It is specifically designed for Baotou (my home city) local businesses. **It runs as a WebSocket service and API is provided for any system that wants to use it with a Subscription.** The service is running on a cloud CentOS server provided by AliYun.

There is also an Electron interface for controlling the crawler and displaying/printing orders.

The system is up and running for more than 1 year and used by two companies and two more companies are requested to use it.

## Features
+ Run several crawlers(puppeteer) in parallel for max efficiency(number of crawlers depends on system ram).
+ Use WebSocket for real-time crawler feedback and control.
+ Support 10 Baotou's local supermarkets/malls.
+ Set Cron job for crawlers.



<img src="assets/images/project/aocs/main.png" width="800"/>

*Main page*

<img src="assets/images/project/aocs/crawler.png" width="800"/>

*Crawlers running*

<img src="assets/images/project/aocs/print.png" width="800"/>

*Order printing*

<img src="assets/images/project/aocs/settings.png" width="800"/>

*Settings*

<img src="assets/images/project/aocs/log.png" width="800"/>

*Crawler run log*

<img src="assets/images/project/aocs/logdetail.png" width="800"/>

*Log detail*