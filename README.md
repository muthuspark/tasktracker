# Daily Task Tracker

An extremely simple daily task tracker built with nodejs, angularjs, express and mysql

![alt text](http://s16.postimg.org/6m1d47dlx/image.png "Logo Title Text 1")


##How to setup

###Step 1: Setup backend database with mysql.
```sql
-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.1.48-community - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- --------------------------------------------------------

-- Dumping database structure for tasktracker
CREATE DATABASE IF NOT EXISTS `tasktracker` 
USE `tasktracker`;

-- Dumping structure for table tasktracker.task
CREATE TABLE IF NOT EXISTS `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` varchar(500) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `createddate` varchar(100) DEFAULT NULL,
  `finisheddate` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```
###Step 2: Setup front end
```javascript
> npm install
> node app.js
```
Navigate to [http://localhost:3000](http://localhost:3000)

##Created by
If you like this, follow [@krimuthu](https://twitter.com/krimuthu) on twitter.

##Licence
```
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```



