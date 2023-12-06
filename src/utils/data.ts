 export interface Department {
  departMent: string;
  sub_departments?: string[];
}
 
 
 const departmentData : Department[] = [

   {
     "departMent" : "Customer Service", 
     "sub_departments" : [
        "support", 
         "customer_success"
     ]

   }, 
   {
    "departMent": "Design",
    "sub_departments": [
      "graphic_design",
      "product_design",
      "web_design"
    ]
  }, 
  {
    "departMent" : "Agriculture & Fishing", 
    "sub_departments" : [
      'agriculture', 
      "crops", 
      "fishing", 
      "ranching", 
       "livestock"
    ]
  }, 
  {
     "departMent": "Business Services",
      "sub_departments": [
        "accounting", 
        "auctions", 
        "call centers", 
        "career", 
        "debt collection", 
        "commercial planning", 
        "marketing"
      ]
  }, 
  {
    "departMent" : "Technology"
  }



]; 
export default departmentData; 