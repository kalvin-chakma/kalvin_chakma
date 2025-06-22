# SQL Queries Practice QNA

#### 1. Salesman Table

```sql
CREATE TABLE salesman (
    salesman_id INT PRIMARY KEY,
    name VARCHAR(255),
    city VARCHAR(255),
    commission FLOAT
);
```

```sql
INSERT INTO salesman VALUES
    (5001, 'James Hoog', 'New York', 0.15),
    (5002, 'Nail Knite', 'Paris', 0.13),
    (5005, 'Pit Alex', 'London', 0.11),
    (5006, 'Mc Lyon', 'Paris', 0.14),
    (5003, 'Lauson Hen', NULL, 0.12),
    (5007, 'Paul Adam', 'Rome', 0.13);
```

**Sample Data:**

| salesman_id | name       | city     | commission |
| ----------- | ---------- | -------- | ---------- |
| 5001        | James Hoog | New York | 0.15       |
| 5002        | Nail Knite | Paris    | 0.13       |
| 5005        | Pit Alex   | London   | 0.11       |
| 5006        | Mc Lyon    | Paris    | 0.14       |
| 5003        | Lauson Hen | NULL     | 0.12       |
| 5007        | Paul Adam  | Rome     | 0.13       |

#### 2. Customer Table

```sql
CREATE TABLE customer (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(255),
    city VARCHAR(255),
    grade INT,
    salesman_id INT
);
```

```sql
INSERT INTO customer VALUES
    (3002, 'Nick Rimando', 'New York', 100, 5001),
    (3005, 'Graham Zusi', 'California', 200, 5002),
    (3001, 'Brad Guzan', 'London', NULL, 5005),
    (3004, 'Fabian Johns', 'Paris', 300, 5006),
    (3007, 'Brad Davis', 'New York', 200, 5001),
    (3009, 'Geoff Camero', 'Berlin', 100, 5003),
    (3008, 'Julian Green', 'London', 300, 5002),
    (3003, 'Jozy Altidor', 'Moscow', 200, 5007);
```

**Sample Data:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |
| 3001        | Brad Guzan    | London     | NULL  | 5005        |
| 3004        | Fabian Johns  | Paris      | 300   | 5006        |
| 3007        | Brad Davis    | New York   | 200   | 5001        |
| 3009        | Geoff Camero  | Berlin     | 100   | 5003        |
| 3008        | Julian Green  | London     | 300   | 5002        |
| 3003        | Jozy Altidor  | Moscow     | 200   | 5007        |

#### 3. Orders Table

```sql
CREATE TABLE orders (
    order_no INT PRIMARY KEY,
    purchase_amount FLOAT,
    order_date DATE,
    customer_id INT,
    salesman_id INT
);
```

```sql
INSERT INTO orders VALUES
    (70001, 150.5, '2012-10-05', 3005, 5002),
    (70009, 270.65, '2012-09-10', 3001, 5005),
    (70002, 65.26, '2012-10-05', 3002, 5001),
    (70004, 110.5, '2012-08-17', 3009, 5003),
    (70007, 948.5, '2012-09-10', 3005, 5002),
    (70005, 2400.6, '2012-07-27', 3007, 5001),
    (70008, 5760, '2012-09-10', 3002, 5001),
    (70010, 1983.43, '2012-10-10', 3004, 5006),
    (70003, 2480.4, '2012-10-10', 3009, 5003),
    (70012, 250.45, '2012-06-27', 3008, 5002),
    (70011, 75.29, '2012-08-17', 3003, 5007),
    (70013, 3045.6, '2012-04-25', 3002, 5001);
```

**Sample Data:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70001    | 150.5           | 2012-10-05 | 3005        | 5002        |
| 70009    | 270.65          | 2012-09-10 | 3001        | 5005        |
| 70002    | 65.26           | 2012-10-05 | 3002        | 5001        |
| 70004    | 110.5           | 2012-08-17 | 3009        | 5003        |
| 70007    | 948.5           | 2012-09-10 | 3005        | 5002        |
| 70005    | 2400.6          | 2012-07-27 | 3007        | 5001        |
| 70008    | 5760            | 2012-09-10 | 3002        | 5001        |
| 70010    | 1983.43         | 2012-10-10 | 3004        | 5006        |
| 70003    | 2480.4          | 2012-10-10 | 3009        | 5003        |
| 70012    | 250.45          | 2012-06-27 | 3008        | 5002        |
| 70011    | 75.29           | 2012-08-17 | 3003        | 5007        |
| 70013    | 3045.6          | 2012-04-25 | 3002        | 5001        |

#### 4. Company Table

```sql
CREATE TABLE company (
    COMPANY_ID INT PRIMARY KEY,
    COMPANY_NAME VARCHAR(255)
);
```

```sql
INSERT INTO company VALUES
    (11, 'Samsung'),
    (12, 'iBall'),
    (13, 'Epsion'),
    (14, 'Zebronics'),
    (15, 'Asus'),
    (16, 'Frontech');
```

**Sample Data:**

| COMPANY_ID | COMPANY_NAME |
| ---------- | ------------ |
| 11         | Samsung      |
| 12         | iBall        |
| 13         | Epsion       |
| 14         | Zebronics    |
| 15         | Asus         |
| 16         | Frontech     |

#### 5. Product Table

```sql
CREATE TABLE product (
    PRODUCT_ID INT PRIMARY KEY,
    PRODUCT_NAME VARCHAR(255),
    PRODUCT_PRICE INT,
    PRODUCT_COMPANY INT
);
```

```sql
INSERT INTO product VALUES
    (101, 'Mother Board', 3200, 15),
    (102, 'Keyboard', 450, 16),
    (103, 'ZIP drive', 250, 14),
    (104, 'Speaker', 550, 16),
    (105, 'Monitor', 5000, 11),
    (106, 'DVD drive', 900, 12),
    (107, 'CD drive', 800, 12),
    (108, 'Printer', 2600, 13),
    (109, 'Refill cartridge', 350, 13),
    (110, 'Mouse', 250, 12);
```

**Sample Data:**

| PRODUCT_ID | PRODUCT_NAME     | PRODUCT_PRICE | PRODUCT_COMPANY |
| ---------- | ---------------- | ------------- | --------------- |
| 101        | Mother Board     | 3200          | 15              |
| 102        | Keyboard         | 450           | 16              |
| 103        | ZIP drive        | 250           | 14              |
| 104        | Speaker          | 550           | 16              |
| 105        | Monitor          | 5000          | 11              |
| 106        | DVD drive        | 900           | 12              |
| 107        | CD drive         | 800           | 12              |
| 108        | Printer          | 2600          | 13              |
| 109        | Refill cartridge | 350           | 13              |
| 110        | Mouse            | 250           | 12              |

#### 6. Department Table

```sql
CREATE TABLE department (
    DEPT_CODE INT PRIMARY KEY,
    DEPT_NAME VARCHAR(255),
    DEPT_BUDGET INT
);
```

```sql
INSERT INTO department VALUES
    (57, 'IT', 65000),
    (63, 'Finance', 15000),
    (47, 'HR', 2250000),
    (27, 89, 'RD', 55),
    (000),
    (70000, 'QC');
```

**Sample Data:**

| DEPT_CODE | DEPT_NAME | DEPT_BUDGET |
| --------- | --------- | ----------- |
| 57        | IT        | 65000       |
| 63        | Finance   | 15000       |
| 47        | HR        | 240000      |
| 27        | RD        | 55000       |
| 89        | QC        | 75000       |

#### 7. Employee Table

```sql
CREATE TABLE employee (
    EMPLOYEE_ID INT PRIMARY KEY,
    EMPLOYEE_FNAME VARCHAR(255),
    EMPLOYEE_LNAME VARCHAR(255),
    EMPLOYEE_DEPT INT
);
```

```sql
INSERT INTO employee VALUES
    (127323, 'Michale', 'Robbin', 57),
    (526689, 'Carlos', 'Snares', 63),
    (843795, 'Enric', 'Dosio', 57),
    (328717, 'John', 'Snares', 63),
    (444527, 'Joseph', 'Dosni', 47),
    (659831, 'Zanifer', 'Emily', 47),
    (847674, 'Kuleswar', 'Sitaraman', 57),
    (748681, 'Henrey', 'Gabriel', 47),
    (555935, 'Alex', 'Manuel', 57),
    (539569, 'George', 'Mardy', 27),
    (733843, 'Mario', 'Saule', 63),
    (631548, 'Alan', 'Snappy', 27),
    (839139, 'Maria', 'Foster', 57);
```

**Sample Data:**

| EMPLOYEE_ID | EMPLOYEE_FNAME | EMPLOYEE_LNAME | EMPLOYEE_DEPT |
| ----------- | -------------- | -------------- | ------------- |
| 127323      | Michale        | Robbin         | 57            |
| 526689      | Carlos         | Snares         | 63            |
| 843795      | Enric          | Dosio          | 57            |
| 328717      | John           | Snares         | 63            |
| 444527      | Joseph         | Dosni          | 47            |
| 659831      | Zanifer        | Emily          | 47            |
| 847674      | Kuleswar       | Sitaraman      | 57            |
| 748681      | Henrey         | Gabriel        | 47            |
| 555935      | Alex           | Manuel         | 57            |
| 539569      | George         | Mardy          | 27            |
| 733843      | Mario          | Saule          | 63            |
| 631548      | Alan           | Snappy         | 27            |
| 839139      | Maria          | Foster         | 57            |

---

## INNER JOIN Queries

### 1. Salesmen and Customers in Same City

Write a SQL query to prepare a list with salesman name, customer name, and their cities for salesmen and customers who belong to the same city.

**Query:**

```sql
SELECT s.name AS "Salesman", c.customer_name AS "Customer Name", c.city AS "City"
FROM salesman s INNER JOIN customer c ON s.city = c.city;
```

**Expected Result:**

| Salesman   | Customer Name | City     |
| ---------- | ------------- | -------- |
| James Hoog | Nick Rimando  | New York |
| James Hoog | Brad Davis    | New York |
| Nail Knite | Fabian Johns  | Paris    |
| Pit Alex   | Brad Guzan    | London   |
| Pit Alex   | Julian Green  | London   |

### 2. Orders Between 500 and 2000

Write a SQL query to make a list with order number, purchase amount, customer name, and city for orders with an amount between 500 and 2000.

**Query:**

```sql
SELECT o.order_no AS "Order No", o.purchase_amount AS "Purchase Amount",
       c.customer_name AS "Customer Name", c.city AS "City"
FROM orders o INNER JOIN customer c ON o.customer_id = c.customer_id
WHERE o.purchase_amount BETWEEN 500 AND 2000;
```

**Expected Result:**

| Order No | Purchase Amount | Customer Name | City       |
| -------- | --------------- | ------------- | ---------- |
| 70007    | 948.50          | Graham Zusi   | California |
| 70010    | 1983.43         | Fabian Johns  | Paris      |

### 3. Salesman-Customer Relationships

Write a SQL query to identify which salesman is working for which customer.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", s.name AS "Salesman"
FROM customer c INNER JOIN salesman s ON c.salesman_id = s.salesman_id;
```

**Expected Result:**

| Customer Name | Salesman   |
| ------------- | ---------- |
| Nick Rimando  | James Hoog |
| Graham Zusi   | Nail Knite |
| Brad Guzan    | Pit Alex   |
| Fabian Johns  | Mc Lyon    |
| Brad Davis    | James Hoog |
| Geoff Camero  | Lauson Hen |
| Julian Green  | Nail Knite |
| Jozy Altidor  | Paul Adam  |

### 4. Customers with Salesmen Having > 12% Commission

Write a SQL query to find customers who appointed a salesman with a commission greater than 12%.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", c.city AS "City",
       s.name AS "Salesman", s.commission AS "Commission"
FROM customer c INNER JOIN salesman s ON c.salesman_id = s.salesman_id
WHERE s.commission > 0.12;
```

**Expected Result:**

| Customer Name | City       | Salesman   | Commission |
| ------------- | ---------- | ---------- | ---------- |
| Nick Rimando  | New York   | James Hoog | 0.15       |
| Graham Zusi   | California | Nail Knite | 0.13       |
| Fabian Johns  | Paris      | Mc Lyon    | 0.14       |
| Brad Davis    | New York   | James Hoog | 0.15       |
| Julian Green  | London     | Nail Knite | 0.13       |
| Jozy Altidor  | Moscow     | Paul Adam  | 0.13       |

### 5. Different Cities and > 12% Commission

Write a SQL query to find customers who appointed a salesman who does not live in the same city and has a commission above 12%.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", c.city AS "Customer City",
       s.name AS "Salesman", s.city AS "Salesman City", s.commission AS "Commission"
FROM customer c INNER JOIN salesman s ON c.salesman_id = s.salesman_id
WHERE s.commission > 0.12 AND c.city != s.city;
```

**Expected Result:**

| Customer Name | Customer City | Salesman   | Salesman City | Commission |
| ------------- | ------------- | ---------- | ------------- | ---------- |
| Graham Zusi   | California    | Nail Knite | Paris         | 0.13       |
| Julian Green  | London        | Nail Knite | Paris         | 0.13       |
| Jozy Altidor  | Moscow        | Paul Adam  | Rome          | 0.13       |

### 6. Complete Order Details

Write a SQL query to find details of an order, including order number, order date, amount, customer name, salesman name, and commission.

**Query:**

```sql
SELECT o.order_no AS "Order No", o.order_date AS "Order Date",
       o.purchase_amount AS "Purchase Amount", c.customer_name AS "Customer Name",
       s.name AS "Salesman", s.commission AS "Commission"
FROM orders o
INNER JOIN customer c ON o.customer_id = c.customer_id
INNER JOIN salesman s ON o.salesman_id = s.salesman_id;
```

**Expected Result:**

| Order No | Order Date | Purchase Amount | Customer Name | Salesman   | Commission |
| -------- | ---------- | --------------- | ------------- | ---------- | ---------- |
| 70001    | 2012-10-05 | 150.50          | Graham Zusi   | Nail Knite | 0.13       |
| 70009    | 2012-09-10 | 270.65          | Brad Guzan    | Pit Alex   | 0.11       |
| 70002    | 2012-10-05 | 65.26           | Nick Rimando  | James Hoog | 0.15       |
| 70004    | 2012-08-17 | 110.50          | Geoff Camero  | Lauson Hen | 0.12       |
| 70007    | 2012-09-10 | 948.50          | Graham Zusi   | Nail Knite | 0.13       |
| 70005    | 2012-07-27 | 2400.60         | Brad Davis    | James Hoog | 0.15       |
| 70008    | 2012-09-10 | 5760.00         | Nick Rimando  | James Hoog | 0.15       |
| 70010    | 2012-10-10 | 1983.43         | Fabian Johns  | Mc Lyon    | 0.14       |
| 70003    | 2012-10-10 | 2480.40         | Geoff Camero  | Lauson Hen | 0.12       |
| 70012    | 2012-06-27 | 250.45          | Julian Green  | Nail Knite | 0.13       |
| 70011    | 2012-08-17 | 75.29           | Jozy Altidor  | Paul Adam  | 0.13       |
| 70013    | 2012-04-25 | 3045.60         | Nick Rimando  | James Hoog | 0.15       |

---

## LEFT JOIN Queries

### 7. All Customers (Ascending Order)

Write a SQL query to list customers in ascending order who work either through a salesman or on their own.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name"
FROM customer c LEFT JOIN salesman s ON c.salesman_id = s.salesman_id
ORDER BY c.customer_id ASC;
```

**Expected Result:**

| Customer Name |
| ------------- |
| Brad Guzan    |
| Nick Rimando  |
| Jozy Altidor  |
| Fabian Johns  |
| Graham Zusi   |
| Brad Davis    |
| Julian Green  |
| Geoff Camero  |

### 8. Customers with Grade < 300

Write a SQL query to list customers in ascending order who hold a grade less than 300 and work either through a salesman or on their own.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", c.grade AS "Grade"
FROM customer c LEFT JOIN salesman s ON c.salesman_id = s.salesman_id
WHERE c.grade < 300
ORDER BY c.customer_id ASC;
```

**Expected Result:**

| Customer Name | Grade |
| ------------- | ----- |
| Nick Rimando  | 100   |
| Jozy Altidor  | 200   |
| Graham Zusi   | 200   |
| Brad Davis    | 200   |
| Geoff Camero  | 100   |

### 9. Customer Orders Report

Write a SQL query to make a report with customer name, city, order number, order date, and order amount, in ascending order by order date, to show whether customers have placed orders.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", c.city AS "City",
       o.order_no AS "Order No", o.order_date AS "Order Date",
       o.purchase_amount AS "Purchase Amount"
FROM customer c
LEFT OUTER JOIN orders o ON c.customer_id = o.customer_id
ORDER BY o.order_date ASC;
```

**Expected Result:**

| Customer Name | City       | Order No | Order Date | Purchase Amount |
| ------------- | ---------- | -------- | ---------- | --------------- |
| Nick Rimando  | New York   | 70013    | 2012-04-25 | 3045.60         |
| Julian Green  | London     | 70012    | 2012-06-27 | 250.45          |
| Brad Davis    | New York   | 70005    | 2012-07-27 | 2400.60         |
| Geoff Camero  | Berlin     | 70004    | 2012-08-17 | 110.50          |
| Jozy Altidor  | Moscow     | 70011    | 2012-08-17 | 75.29           |
| Brad Guzan    | London     | 70009    | 2012-09-10 | 270.65          |
| Graham Zusi   | California | 70007    | 2012-09-10 | 948.50          |
| Nick Rimando  | New York   | 70008    | 2012-09-10 | 5760.00         |
| Graham Zusi   | California | 70001    | 2012-10-05 | 150.50          |
| Nick Rimando  | New York   | 70002    | 2012-10-05 | 65.26           |
| Fabian Johns  | Paris      | 70010    | 2012-10-10 | 1983.43         |
| Geoff Camero  | Berlin     | 70003    | 2012-10-10 | 2480.40         |

### 10. Complete Customer-Order-Salesman Report

Write a SQL query to make a report with customer name, city, order number, order date, order amount, salesman name, and commission, to show whether customers have placed orders through their salesman or on their own.

**Query:**

```sql
SELECT c.customer_name AS "Customer Name", c.city AS "City",
       o.order_no AS "Order No", o.order_date AS "Order Date",
       o.purchase_amount AS "Purchase Amount",
       s.name AS "Salesman", s.commission AS "Commission"
FROM customer c
LEFT JOIN orders o ON c.customer_id = o.customer_id
LEFT JOIN salesman s ON c.salesman_id = s.salesman_id;
```

**Expected Result:**

| Customer Name | City       | Order No | Order Date | Purchase Amount | Salesman   | Commission |
| ------------- | ---------- | -------- | ---------- | --------------- | ---------- | ---------- |
| Nick Rimando  | New York   | 70002    | 2012-10-05 | 65.26           | James Hoog | 0.15       |
| Nick Rimando  | New York   | 70008    | 2012-09-10 | 5760.00         | James Hoog | 0.15       |
| Nick Rimando  | New York   | 70013    | 2012-04-25 | 3045.60         | James Hoog | 0.15       |
| Graham Zusi   | California | 70001    | 2012-10-05 | 150.50          | Nail Knite | 0.13       |
| Graham Zusi   | California | 70007    | 2012-09-10 | 948.50          | Nail Knite | 0.13       |
| Brad Guzan    | London     | 70009    | 2012-09-10 | 270.65          | Pit Alex   | 0.11       |
| Fabian Johns  | Paris      | 70010    | 2012-10-10 | 1983.43         | Mc Lyon    | 0.14       |
| Brad Davis    | New York   | 70005    | 2012-07-27 | 2400.60         | James Hoog | 0.15       |
| Geoff Camero  | Berlin     | 70004    | 2012-08-17 | 110.50          | Lauson Hen | 0.12       |
| Geoff Camero  | Berlin     | 70003    | 2012-10-10 | 2480.40         | Lauson Hen | 0.12       |
| Julian Green  | London     | 70012    | 2012-06-27 | 250.45          | Nail Knite | 0.13       |
| Jozy Altidor  | Moscow     | 70011    | 2012-08-17 | 75.29           | Paul Adam  | 0.13       |

### 11. All Salesmen (Ascending Order)

Write a SQL query to list salesmen in ascending order, whether they work for one or more customers or none.

**Query:**

```sql
SELECT s.name AS "Salesman"
FROM salesman s LEFT JOIN customer c ON s.salesman_id = c.salesman_id
ORDER BY s.salesman_id ASC;
```

**Expected Result:**

| Salesman   |
| ---------- |
| James Hoog |
| James Hoog |
| Neil Knite |
| Neil Knite |
| Lauson Hen |
| Pit Alex   |
| Mc Lyon    |
| Paul Adam  |

---

## CROSS JOIN Queries

### 12. Cartesian Product: All Salesmen-Customer Combinations

Write a SQL query to create a Cartesian product between salesman and customer, where each salesman appears for all customers and vice versa.

**Query:**

```sql
SELECT s.name AS "Salesman", c.customer_name AS "Customer"
FROM salesmen s CROSS JOIN customer c;
```

**Expected Result:**

Creates a48 rows (6 salesmen × 8 customers). Example (partial):

| Salesman   | Customer     |
| ---------- | ------------ |
| James Hoog | Nick Rimando |
| James Hoog | Graham Zusi  |
| ...        | ...          |

### 13. Cartesian Product: Salesmen with Cities

Write a SQL query to create a Cartesian product between salesman and customer, where each salesman with a city appears for all customers.

**Query:**

```sql
SELECT s.name AS "Salesman", c.customer_name AS "Customer"
FROM salesman s CROSS JOIN customer c
WHERE s.city IS NOT NULL;
```

**Expected Result:**

Creates 40 rows (5 salesmen with cities × 8 customers). Example (partial):

| Salesman   | Customer     |
| ---------- | ------------ |
| James Hoog | Nick Rimando |
| James Hoog | Graham Zusi  |
| ...        | ...          |

### 14. Cartesian Product: Salesmen with Cities and Customers with Grades

Write a SQL query to create a Cartesian product between salesman and customer, where salesmen belong to a city and customers have a grade.

**Query:**

```sql
SELECT s.name AS "Salesman", c.customer_name AS "Customer"
FROM salesman s CROSS JOIN customer c
WHERE s.city IS NOT NULL AND c.grade IS NOT NULL;
```

**Expected Result:**

Creates 35 rows (5 salesmen with cities × 7 customers with grades). Example (partial):

| Salesman   | Customer     |
| ---------- | ------------ |
| James Hoog | Nick Rimando |
| James Hoog | Graham Zusi  |
| ...        | ...          |

### 15. Cartesian Product: Different Cities and Customer Grades

Write a SQL query to create a Cartesian product between salesman and customer, where salesmen belong to a different city than the customer and customers have a grade.

**Query:**

```sql
SELECT s.name AS "Salesman", c.customer_name AS "Customer"
FROM salesman s CROSS JOIN customer c
WHERE s.city IS NOT NULL AND s.city != c.city AND c.grade IS NOT NULL;

```

**Expected Result:**

Shows combinations where salesman and customer are from different cities. Example (partial):

| Salesman   | Customer     |
| ---------- | ------------ |
| James Hoog | Graham Zusi  |
| Nail Knite | Nick Rimando |
| ...        | ...          |

---

## Product-Company Queries

### 16. All Product Data with Company Info

Write a SQL query to display all data from the product table, including each product's producer company.

**Query:**

```sql
SELECT p.*, c.COMPANY_NAME
FROM product p INNER JOIN company c ON p.PRODUCT_COMPANY = c.COMPANY_ID;
```

**Expected Result:**
| PRODUCT_ID | PRODUCT_NAME | PRODUCT_PRICE | PRODUCT_COMPANY | COMPANY_NAME |
|------------|------------------|---------------|-----------------|--------------|
| 101 | Mother Board | 3200 | 15 | Asus |
| 102 | Keyboard | 450 | 16 | Frontech |
| 103 | ZIP drive | 250 | 14 | Zebronics |
| 104 | Speaker | 550 | 16 | Frontech |
| 105 | Monitor | 5000 | 11 | Samsung |
| 106 | DVD drive | 900 | 12 | iBall |
| 107 | CD drive | 800 | 12 | iBall |
| 108 | Printer | 2600 | 13 | Epsion |
| 109 | Refill cartridge | 350 | 13 | Epsion |
| 110 | Mouse | 250 | 12 | iBall |

### 17. Product Names, Prices, and Company Names

Write a SQL query to display the name, price, and company name of all products.

**Query:**

```sql
SELECT p.PRODUCT_NAME AS "Product Name", p.PRODUCT_PRICE AS "Price",
       c.COMPANY_NAME AS "Company Name"
FROM product p INNER JOIN company c ON p.PRODUCT_COMPANY = c.COMPANY_ID;
```

**Expected Result:**

| Product Name     | Price | Company Name |
| ---------------- | ----- | ------------ |
| Mother Board     | 3200  | Asus         |
| Keyboard         | 450   | Frontech     |
| ZIP drive        | 250   | Zebronics    |
| Speaker          | 550   | Frontech     |
| Monitor          | 5000  | Samsung      |
| DVD drive        | 900   | iBall        |
| CD drive         | 800   | iBall        |
| Printer          | 2600  | Epsion       |
| Refill cartridge | 350   | Epsion       |
| Mouse            | 250   | iBall        |

### 18. Average Price by Company

Write a SQL query to display the average price of products for each company.

**Query:**

```sql
SELECT c.COMPANY_NAME AS "Company", AVG(p.PRODUCT_PRICE) AS "Avg Price"
FROM product p INNER JOIN company c ON p.PRODUCT_COMPANY = c.COMPANY_ID
GROUP BY c.COMPANY_NAME;
```

**Expected Result:**

| Company   | Avg Price |
| --------- | --------- |
| Asus      | 3200.00   |
| Frontech  | 500.00    |
| Zebronics | 250.00    |
| Samsung   | 5000.00   |
| iBall     | 650.00    |
| Epsion    | 1475.00   |

### 19. Companies with Average Price ≥ Rs. 350

Write a SQL query to display companies with an average product price greater than or equal to Rs. 350.

**Query:**

```sql
SELECT c.COMPANY_NAME AS "Company", AVG(p.PRODUCT_PRICE) AS "Avg Price"
FROM product p INNER JOIN company c ON p.PRODUCT_COMPANY = c.COMPANY_ID
GROUP BY c.COMPANY_NAME
HAVING AVG(p.PRODUCT_PRICE) >= 350;
```

**Expected Result:**

| Company  | Avg Price |
| -------- | --------- |
| Asus     | 3200.00   |
| Frontech | 500.00    |
| Samsung  | 5000.00   |
| iBall    | 650.00    |
| Epsion   | 1475.00   |

### 20. Most Expensive Product by Company

Write a SQL query to display the most expensive product for each company.

**Query:**

```sql
SELECT c.COMPANY_NAME AS "Company", p.PRODUCT_ID AS "Product ID",
       p.PRODUCT_NAME AS "Product Name", p.PRODUCT_PRICE AS "Price"
FROM product p INNER JOIN company c ON p.PRODUCT_COMPANY = c.COMPANY_ID
WHERE p.PRODUCT_PRICE = (
    SELECT MAX(p2.PRODUCT_PRICE)
    FROM product p2
    WHERE p2.PRODUCT_COMPANY = c.COMPANY_ID
);
```

**Expected Result:**

| Company   | Product ID | Product Name | Price |
| --------- | ---------- | ------------ | ----- |
| Asus      | 101        | Mother Board | 3200  |
| Frontech  | 104        | Speaker      | 550   |
| Zebronics | 103        | ZIP drive    | 250   |
| Samsung   | 105        | Monitor      | 5000  |
| iBall     | 106        | DVD drive    | 900   |
| Epsion    | 108        | Printer      | 2600  |

---

## Employee-Department Queries

### 21. All Employee Data with Department

Write a SQL query to display all employee data along with their department details.

**Query:**

```sql
SELECT e.*, d.DEPT_NAME, d.DEPT_BUDGET
FROM employee e INNER JOIN department d ON e.EMPLOYEE_DEPT = d.DEPT_CODE;
```

**Expected Result:**

| EMPLOYEE_ID | EMPLOYEE_FNAME | EMPLOYEE_LNAME | EMPLOYEE_DEPT | DEPT_NAME | DEPT_BUDGET |
| ----------- | -------------- | -------------- | ------------- | --------- | ----------- |
| 127323      | Michale Robbin | 57             | IT            | 65000     |
| 526689      | Carlos         | Snares         | 63            | Finance   | 15000       |
| 843795      | Enric          | Dosio          | 57            | IT        | 65000       |
| 328717      | John           | Snares         | 63            | Finance   | 15000       |
| 444527      | Joseph         | Dosni          | 47            | HR        | 240000      |
| 659831      | Zanifer        | Emily          | 47            | HR        | 240000      |
| 847674      | Kuleswar       | Sitaraman      | 57            | IT        | 65000       |
| 748681      | Henrey         | Gabriel        | 47            | HR        | 240000      |
| 555935      | Alex           | Manuel         | 57            | IT        | 65000       |
| 539569      | George         | Mardy          | 27            | RD        | 55000       |
| 733843      | Mario          | Saule          | 63            | Finance   | 15000       |
| 631548      | Alan           | Snappy         | 27            | RD        | 55000       |
| 839139      | Maria          | Foster         | 57            | IT        | 65000       |

### 22. Employee Names with Department Info

Write a SQL query to display employee first and last names along with their department name and budget.

**Query:**

```sql
SELECT e.EMPLOYEE_FNAME AS "First Name", e.EMPLOYEE_LNAME AS "Last Name",
       d.DEPT_NAME AS "Department Name", d.DEPT_BUDGET AS "Amount Allotted"
FROM employee e INNER JOIN department d ON e.EMPLOYEE_DEPT = d.DEPT_CODE;
```

**Expected Result:**

| First Name | Last Name | Department Name | Amount Allotted |
| ---------- | --------- | --------------- | --------------- |
| Michale    | Robbin    | IT              | 65000           |
| Carlos     | Snares    | Finance         | 15000           |
| Enric      | Dosio     | IT              | 65000           |
| John       | Snares    | Finance         | 15000           |
| Joseph     | Dosni     | HR              | 240000          |
| Zanifer    | Emily     | HR              | 240000          |
| Kuleswar   | Sitaraman | IT              | 65000           |
| Henrey     | Gabriel   | HR              | 240000          |
| Alex       | Manuel    | IT              | 65000           |
| George     | Mardy     | RD              | 55000           |
| Mario      | Saule     | Finance         | 15000           |
| Alan       | Snappy    | RD              | 55000           |
| Maria      | Foster    | IT              | 65000           |

### 23. Employees in Departments with Budget > Rs. 50000

Write a SQL query to display employees in departments with a budget greater than Rs. 50000.

**Query:**

```sql
SELECT e.EMPLOYEE_FNAME AS "First Name", e.EMPLOYEE_LNAME AS "Last Name"
FROM employee e INNER JOIN department d ON e.EMPLOYEE_DEPT = d.DEPT_CODE
WHERE d.DEPT_BUDGET > 50000;
```

**Expected Result:**

| First Name | Last Name |
| ---------- | --------- |
| Michale    | Robbin    |
| Enric      | Dosio     |
| Joseph     | Dosni     |
| Zanifer    | Emily     |
| Kuleswar   | Sitaraman |
| Henrey     | Gabriel   |
| Alex       | Manuel    |
| George     | Mardy     |
| Alan       | Snappy    |
| Maria      | Foster    |

### 24. Departments with More Than 2 Employees

Write a SQL query to display departments with more than 2 employees.

**Query:**

```sql
SELECT d.DEPT_NAME AS "Department Name", COUNT(e.EMPLOYEE_ID) AS "No of Employees"
FROM employee e INNER JOIN department d ON e.EMPLOYEE_DEPT = d.DEPT_CODE
GROUP BY d.DEPT_NAME
HAVING COUNT(e.EMPLOYEE_ID) > 2;
```

**Expected Result:**

| Department Name | No of Employees |
| --------------- | --------------- |
| IT              | 5               |
| Finance         | 3               |
| HR              | 3               |

---

## Subquery Examples

### 25. Orders by Paul Adam

Write a SQL query to display orders placed by the salesman named Paul Adam.

**Query:**

```sql
SELECT *
FROM orders
WHERE salesman_id = (
    SELECT salesman_id
    FROM salesman
    WHERE name = 'Paul Adam'
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70011    | 75.29           | 2012-08-17 | 3003        | 5007        |

### 26. Orders from London Salesman

Write a SQL query to display orders placed by salesmen from London.

**Query:**

```sql
SELECT *
FROM orders
WHERE salesman_id = (
    SELECT salesman_id
    FROM salesman
    WHERE city = 'London'
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70009    | 270.65          | 2012-09-10 | 3001        | 5005        |

### 27. Orders from New York Salesmen

Write a SQL query to display orders placed by salesmen from New York.

**Query:**

```sql
SELECT *
FROM orders
WHERE salesman_id IN (
    SELECT salesman_id
    FROM salesman
    WHERE city = 'New York'
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70002    | 65.26           | 2012-10-05 | 3002        | 5001        |
| 70005    | 2400.60         | 2012-07-27 | 3007        | 5001        |
| 70008    | 5760.00         | 2012-09-10 | 3002        | 5001        |
| 70013    | 3045.60         | 2012-04-25 | 3002        | 5001        |

### 28. Commission of Salesmen Serving Paris Customers

Write a SQL query to display the commission of salesmen serving customers in Paris.

**Query:**

```sql
SELECT commission
FROM salesman
WHERE salesman_id IN (
    SELECT salesman_id
    FROM customer
    WHERE city = 'Paris'
);
```

**Expected Result:**

| commission |
| ---------- |
| 0.14       |

### 29. Count Customers with Grades Above New York Average

Write a SQL query to count customers with grades above the average grade of customers in New York.

**Query:**

```sql
SELECT COUNT(*) AS "Customer Count"
FROM customer
WHERE grade > (
    SELECT AVG(grade)
    FROM customer
    WHERE city = 'New York'
);
```

**Expected Result:**

| Customer Count |
| -------------- |
| 3              |

### 30. Customers with Orders on 2012-10-05

Write a SQL query to display customers who placed orders on October 5, 2012.

**Query:**

```sql
SELECT *
FROM customer
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE order_date = '2012-10-05'
);
```

**Expected Result:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |

---

## Advanced Subqueries with ANY/ALL

### 31. Customers with Grade > ANY Customer in Cities < 'New York'

Write a SQL query to display customers whose grade is higher than at least one customer from cities alphabetically before New York.

**Query:**

```sql
SELECT *
FROM customer
WHERE grade > ANY (
    SELECT grade
    FROM customer
    WHERE city < 'New York'
);
```

**Expected Result:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |
| 3004        | Fabian Johns  | Paris      | 300   | 5006        |
| 3007        | Brad Davis    | New York   | 200   | 5001        |
| 3008        | Julian Green  | London     | 300   | 5002        |
| 3003        | Jozy Altidor  | Moscow     | 200   | 5007        |

### 32. Customers with Orders on 2012-08-17

Write a SQL query to display customers who placed orders on August 17, 2012.

**Query (Subquery):**

```sql
SELECT *
FROM customer
WHERE customer_id IN (
    SELECT customer_id
    FROM orders
    WHERE order_date = '2012-08-17'
);
```

**Query (Join):**

```sql
SELECT c.customer_id, c.customer_name, c.city, c.grade, c.salesman_id
FROM customer c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date = '2012-08-17';
```

**Expected Result:**

| customer_id | customer_name | city   | grade | salesman_id |
| ----------- | ------------- | ------ | ----- | ----------- |
| 3009        | Geoff Camero  | Berlin | 100   | 5003        |
| 3003        | Jozy Altidor  | Moscow | 200   | 5007        |

### 33. Salesmen with More Than One Customer

Write a SQL query to find the name and numbers of salesmen who have more than one customer.

**Query:**

```sql
SELECT salesman_id AS "Salesman ID", name AS "Salesman Name"
FROM salesman
WHERE salesman_id IN (
    SELECT salesman_id
    FROM customer
    GROUP BY salesman_id
    HAVING COUNT(*) > 1
);
```

**Expected Result:**

| Salesman ID | Salesman Name |
| ----------- | ------------- |
| 5001        | James Hoog    |
| 5002        | Nail Knite    |

### 34. Customers if London Customers Exist

Write a SQL query to extract data from the customer table if one or more customers are located in London.

**Query (EXISTS):**

```sql
SELECT *
FROM customer
WHERE EXISTS (
    SELECT *
    FROM customer
    WHERE city = 'London'
);
```

**Query (COUNT):**

```sql
SELECT *
FROM customer
WHERE (
    SELECT COUNT(*)
    FROM customer
    WHERE city = 'London'
) >= 1;
```

**Expected Result:**
| customer_id | customer_name | city | grade | salesman_id |
|-------------|---------------|------------|-------|-------------|
| 3002 | Nick Rimando | New York | 100 | 5001 |
| 3005 | Graham Zusi | California | 200 | 5002 |
| 3001 | Brad Guzan | London | NULL | 5005 |
| 3004 | Fabian Johns | Paris | 300 | 5006 |
| 3007 | Brad Davis | New York | 200 | 5001 |
| 3009 | Geoff Camero | Berlin | 100 | 5003 |
| 3008 | Julian Green | London | 300 | 5002 |
| 3003 | Jozy Altidor | Moscow | 200 | 5007 |

### 35. Salesmen with Multiple Customers

Write a SQL query to find salesmen who have multiple customers.

**Query:**

```sql
SELECT *
FROM salesman
WHERE salesman_id IN (
    SELECT salesman_id
    FROM customer
    GROUP BY salesman_id
    HAVING COUNT(*) > 1
);
```

**Expected Result:**

| salesman_id | name       | city     | commission |
| ----------- | ---------- | -------- | ---------- |
| 5001        | James Hoog | New York | 0.15       |
| 5002        | Nail Knite | Paris    | 0.13       |

### 36. Salesmen with Only One Customer

Write a SQL query to find salesmen who work for only one customer.

**Query:**

```sql
SELECT *
FROM salesman
WHERE salesman_id IN (
    SELECT salesman_id
    FROM customer
    GROUP BY salesman_id
    HAVING COUNT(customer_id) = 1
);
```

**Expected Result:**

| salesman_id | name       | city   | commission |
| ----------- | ---------- | ------ | ---------- |
| 5005        | Pit Alex   | London | 0.11       |
| 5006        | Mc Lyon    | Paris  | 0.14       |
| 5003        | Lauson Hen | NULL   | 0.12       |
| 5007        | Paul Adam  | Rome   | 0.13       |

### 37. Salesmen with Customers Having Multiple Orders

Write a SQL query to find salesmen whose customers have placed more than one order.

**Query:**

```sql
SELECT *
FROM salesman
WHERE salesman_id IN (
    SELECT salesman_id
    FROM customer
    WHERE customer_id IN (
        SELECT customer_id
        FROM orders
        GROUP BY customer_id
        HAVING COUNT(*) > 1
    )
);
```

**Expected Result:**

| salesman_id | name       | city     | commission |
| ----------- | ---------- | -------- | ---------- |
| 5001        | James Hoog | New York | 0.15       |
| 5002        | Nail Knite | Paris    | 0.13       |
| 5003        | Lauson Hen | NULL     | 0.12       |

### 38. Salesmen in Same City as Customers

Write a SQL query to find salesmen who live in a city where any customer lives.

**Query (IN):**

```sql
SELECT *
FROM salesman
WHERE city IN (
    SELECT city
    FROM customer
);
```

**Query (ANY):**

```sql
SELECT *
FROM salesman
WHERE city = ANY (
    SELECT city
    FROM customer
);
```

**Expected Result:**

| salesman_id | name       | city     | commission |
| ----------- | ---------- | -------- | ---------- |
| 5001        | James Hoog | New York | 0.15       |
| 5002        | Nail Knite | Paris    | 0.13       |
| 5005        | Pit Alex   | London   | 0.11       |
| 5006        | Mc Lyon    | Paris    | 0.14       |

### 39. Salesmen with Customers in Same City

Write a SQL query to find salesmen who have customers in their city.

**Query:**

```sql
SELECT *
FROM salesman
WHERE city IN (
    SELECT city
    FROM customer
);
```

**Expected Result:**

| salesman_id | name       | city     | commission |
| ----------- | ---------- | -------- | ---------- |
| 5001        | James Hoog | New York | 0.15       |
| 5002        | Nail Knite | Paris    | 0.13       |
| 5005        | Pit Alex   | London   | 0.11       |
| 5006        | Mc Lyon    | Paris    | 0.14       |

### 40. Orders > ANY Amount on 2012-09-10

Write a SQL query to display orders with amounts greater than at least one order on September 10, 2012.

**Query:**

```sql
SELECT *
FROM orders
WHERE purchase_amount > ANY (
    SELECT purchase_amount
    FROM orders
    WHERE order_date = '2012-09-10'
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70005    | 2400.60         | 2012-07-27 | 3007        | 5001        |
| 70008    | 5760.00         | 2012-09-10 | 3002        | 5001        |
| 70010    | 1983.43         | 2012-10-10 | 3004        | 5006        |
| 70003    | 2480.40         | 2012-10-10 | 3009        | 5003        |
| 70013    | 3045.60         | 2012-04-25 | 3002        | 5001        |

### 41. Orders < Any Amount for Customers in London

Write a SQL query to display orders with amounts smaller than any order amount for customers in London.

**Query:**

```sql
SELECT *
FROM orders
WHERE purchase_amount < ANY (
    SELECT purchase_amount
    FROM orders
    WHERE customer_id IN (
        SELECT customer_id
        FROM customer
        WHERE city = 'London'
    )
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70002    | 65.26           | 2012-10-05 | 3002        | 5001        |
| 70004    | 110.50          | 2012-08-17 | 3009        | 5003        |
| 70001    | 150.50          | 2012-10-05 | 3005        | 5002        |
| 70012    | 250.45          | 2012-06-27 | 3008        | 5002        |
| 70011    | 75.29           | 2012-08-17 | 3003        | 5007        |

### 42. Orders < Maximum Amount for Customers in London

Write a SQL query to display orders with amounts smaller than the maximum order amount for customers in London.

**Query:**

```sql
SELECT *
FROM orders
WHERE purchase_amount < (
    SELECT MAX(purchase_amount)
    FROM orders
    WHERE customer_id IN (
        SELECT customer_id
        FROM customer
        WHERE city = 'London'
    )
);
```

**Expected Result:**

| order_no | purchase_amount | order_date | customer_id | salesman_id |
| -------- | --------------- | ---------- | ----------- | ----------- |
| 70001    | 150.50          | 2012-10-05 | 3005        | 5002        |
| 70009    | 270.65          | 2012-09-10 | 3001        | 5005        |
| 70002    | 65.26           | 2012-10-05 | 3002        | 5001        |
| 70004    | 110.50          | 2012-08-17 | 3009        | 5003        |
| 70007    | 948.50          | 2012-09-10 | 3005        | 5002        |
| 70005    | 2400.60         | 2012-07-27 | 3007        | 5001        |
| 70008    | 5760.00         | 2012-09-10 | 3002        | 5001        |
| 70010    | 1983.43         | 2012-10-10 | 3004        | 5006        |
| 70003    | 2480.40         | 2012-10-10 | 3009        | 5003        |
| 70012    | 250.45          | 2012-06-27 | 3008        | 5002        |
| 70011    | 75.29           | 2012-08-17 | 3003        | 5007        |
| 70013    | 3045.60         | 2012-04-25 | 3002        | 5001        |

### 43. Customers with Grade Higher Than All New York Customers

Write a SQL query to display customers whose grade is higher than every customer in New York.

**Query:**

```sql
SELECT *
FROM customer
WHERE grade > ALL (
    SELECT grade
    FROM customer
    WHERE city = 'New York'
);
```

**Expected Result:**

| customer_id | customer_name | city   | grade | salesman_id |
| ----------- | ------------- | ------ | ----- | ----------- |
| 3004        | Fabian Johns  | Paris  | 300   | 5006        |
| 3008        | Julian Green  | London | 300   | 5002        |

### 44. Customers with Grade Different from London Customers

Write a SQL query to find customers whose grade is different from any grade of customers in London.

**Query:**

```sql
SELECT *
FROM customer
WHERE grade != ANY (
    SELECT grade
    FROM customer
    WHERE city = 'London'
);
```

**Expected Result:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |
| 3007        | Brad Davis    | New York   | 200   | 5001        |
| 3009        | Geoff Camero  | Berlin     | 100   | 5003        |
| 3003        | Jozy Altidor  | Moscow     | 200   | 5007        |

### 45. Customers with Grade Different from Paris Customers

Write a SQL query to find customers whose grade is different from any grade of customers in Paris.

**Query (ANY):**

```sql
SELECT *
FROM customer
WHERE grade != ANY (
    SELECT grade
    FROM customer
    WHERE city = 'Paris'
);
```

**Query (NOT IN):**

```sql
SELECT *
FROM customer
WHERE grade NOT IN (
    SELECT grade
    FROM customer
    WHERE city = 'Paris'
);
```

**Expected Result:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |
| 3001        | Brad Guzan    | London     | NULL  | 5005        |
| 3007        | Brad Davis    | New York   | 200   | 5001        |
| 3009        | Geoff Camero  | Berlin     | 100   | 5003        |
| 3003        | Jozy Altidor  | Moscow     | 200   | 5007        |

### 46. Customers with Grade Different from Dallas Customers

Write a SQL query to find customers whose grade is different from any grade of customers in Dallas.

**Query:**

```sql
SELECT *
FROM customer
WHERE grade NOT IN (
    SELECT grade
    FROM customer
    WHERE city = 'Dallas'
);
```

**Expected Result:**

| customer_id | customer_name | city       | grade | salesman_id |
| ----------- | ------------- | ---------- | ----- | ----------- |
| 3002        | Nick Rimando  | New York   | 100   | 5001        |
| 3005        | Graham Zusi   | California | 200   | 5002        |
| 3001        | Brad Guzan    | London     | NULL  | 5005        |
| 3004        | Fabian Johns  | Paris      | 300   | 5006        |
| 3007        | Brad Davis    | New York   | 200   | 5001        |
| 3009        | Geoff Camero  | Berlin     | 100   | 5003        |
| 3008        | Julian Green  | London     | 300   | 5002        |
| 3003        | Jozy Altidor  | Moscow     | 200   | 5007        |

### 47. Employees with Last Name Gabriel or Dosio

Write a SQL query to find employees whose last name is Gabriel or Dosio.

**Query:**

```sql
SELECT *
FROM employee
WHERE EMPLOYEE_LNAME IN ('Gabriel', 'Dosio');
```

**Expected Result:**

| EMPLOYEE_ID | EMPLOYEE_FNAME | EMPLOYEE_LNAME | EMPLOYEE_DEPT |
| ----------- | -------------- | -------------- | ------------- |
| 843795      | Enric          | Dosio          | 57            |
| 748681      | Henrey         | Gabriel        | 47            |

### 48. Employees in Departments 89 or 63

Write a SQL query to display employees who work in department 89 or 63.

**Query:**

```sql
SELECT *
FROM employee
WHERE EMPLOYEE_DEPT IN (89, 63);
```

**Expected Result:**

| EMPLOYEE_ID | EMPLOYEE_FNAME | EMPLOYEE_LNAME | EMPLOYEE_DEPT |
| ----------- | -------------- | -------------- | ------------- |
| 526689      | Carlos         | Snares         | 63            |
| 328717      | John           | Snares         | 63            |
| 733843      | Mario          | Saule          | 63            |

### 49. Departments with Budget Larger Than Average

Write a SQL query to find departments whose budget is larger than the average budget of all departments.

**Query:**

```sql
SELECT *
FROM department
WHERE DEPT_BUDGET > (
    SELECT AVG(DEPT_BUDGET)
    FROM department
);
```

**Expected Result:**

| DEPT_CODE | DEPT_NAME | DEPT_BUDGET |
| --------- | --------- | ----------- |
| 47        | HR        | 240000      |
| 89        | QC        | 75000       |

### 50. Department with Second Lowest Budget

Write a SQL query to find the department with the second lowest budget.

**Query:**

```sql
SELECT DEPT_CODE, DEPT_NAME, DEPT_BUDGET
FROM department
WHERE DEPT_BUDGET = (
    SELECT MIN(DEPT_BUDGET)
    FROM department
    WHERE DEPT_BUDGET > (
        SELECT MIN(DEPT_BUDGET)
        FROM department
    )
);
```

**Expected Result:**

| DEPT_CODE | DEPT_NAME | DEPT_BUDGET |
| --------- | --------- | ----------- |
| 27        | RD        | 55000       |

### 51. Employees in Department with Second Lowest Budget

Write a SQL query to find the first and last names of employees working in the department with the second lowest budget.

**Query:**

```sql
SELECT EMPLOYEE_FNAME AS "First Name", EMPLOYEE_LNAME AS "Last Name"
FROM employee
WHERE EMPLOYEE_DEPT IN (
    SELECT DEPT_CODE
    FROM department
    WHERE DEPT_BUDGET = (
        SELECT MIN(DEPT_BUDGET)
        FROM department
        WHERE DEPT_BUDGET > (
            SELECT MIN(DEPT_BUDGET)
            FROM department
        )
    )
);
```

**Expected Result:**

| First Name | Last Name |
| ---------- | --------- |
| George     | Mardy     |
| Alan       | Snappy    |

---
