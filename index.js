show dbs
admin    0.000GB
config   0.000GB
emp      0.000GB
local    0.000GB
school   0.000GB
student  0.000GB
test     0.000GB

use Human_Resource
switched to db Human_Resource

db.employee.insertMany([
    {
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
    },
    {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    }
])
{
    "acknowledged" : true,
        "insertedIds" : [
            ObjectId("62e3aae6c1c7208729ca4bf0"),
            ObjectId("62e3aae6c1c7208729ca4bf1"),
            ObjectId("62e3aae6c1c7208729ca4bf2"),
            ObjectId("62e3aae6c1c7208729ca4bf3"),
            ObjectId("62e3aae6c1c7208729ca4bf4")
        ]
}

db.employee.find()
{ "_id" : ObjectId("62e3aae6c1c7208729ca4bf0"), "firstName" : "John", "lastName" : "Doe", "salary" : "25000", "department" : "HR", "lastCompany" : "X", "lastSalary" : "10000", "overallExp" : "2", "contactInfo" : "1234567890", "yearGrad" : "2016", "gradStream" : "CSE" }
{ "_id" : ObjectId("62e3aae6c1c7208729ca4bf1"), "firstName" : "Rohan", "lastName" : "Jame", "salary" : "30000", "department" : "Technical", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "1", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62e3aae6c1c7208729ca4bf2"), "firstName" : "Jame", "lastName" : "Doe", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "20000", "overallExp" : "1", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "ECE" }
{ "_id" : ObjectId("62e3aae6c1c7208729ca4bf3"), "firstName" : "Sao", "lastName" : "Avika", "salary" : "30000", "department" : "Sales", "lastCompany" : "Y", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "1234567860", "yearGrad" : "2015", "gradStream" : "CSE" }
{ "_id" : ObjectId("62e3aae6c1c7208729ca4bf4"), "firstName" : "Jame", "lastName" : "roh", "salary" : "35000", "department" : "Accounts", "lastCompany" : "Z", "lastSalary" : "15000", "overallExp" : "2", "contactInfo" : "123567890", "yearGrad" : "2019", "gradStream" : "EEE" }


db.employee.find({salary:{$gt:"30000"}}).pretty()
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf2"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf4"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}


db.employee.find({yearGrad:{$gt:"2015"}}).pretty()
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf0"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "25000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf2"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf4"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}

db.employee.updateMany({salary:"25000"},{$set:{salary:"32000"}})
{ "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }

db.employee.find().pretty()
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf0"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf1"),
        "firstName" : "Rohan",
        "lastName" : "Jame",
        "salary" : "30000",
        "department" : "Technical",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "1",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf2"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf3"),
        "firstName" : "Sao",
        "lastName" : "Avika",
        "salary" : "30000",
        "department" : "Sales",
        "lastCompany" : "Y",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "1234567860",
        "yearGrad" : "2015",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf4"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}

db.employee.deleteMany({lastCompany:"Y"})
{ "acknowledged" : true, "deletedCount" : 2 }

db.employee.find().pretty()
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf0"),
        "firstName" : "John",
        "lastName" : "Doe",
        "salary" : "32000",
        "department" : "HR",
        "lastCompany" : "X",
        "lastSalary" : "10000",
        "overallExp" : "2",
        "contactInfo" : "1234567890",
        "yearGrad" : "2016",
        "gradStream" : "CSE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf2"),
        "firstName" : "Jame",
        "lastName" : "Doe",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "20000",
        "overallExp" : "1",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "ECE"
}
{
        "_id" : ObjectId("62e3aae6c1c7208729ca4bf4"),
        "firstName" : "Jame",
        "lastName" : "roh",
        "salary" : "35000",
        "department" : "Accounts",
        "lastCompany" : "Z",
        "lastSalary" : "15000",
        "overallExp" : "2",
        "contactInfo" : "123567890",
        "yearGrad" : "2019",
        "gradStream" : "EEE"
}