		var employee1 = { name:"John", age: 25, salary:30000, city: "HYD", State: "TG", pincode: 500045 };          // empolyee details

				var employee2 = { name:"Charle", age: 28, salary:40000, city: "CHE", State: "TN", pincode: 500050 };

						var employee3 = { name:"Peter", age: 30, salary:50000, city: "BAN", State: "KAR", pincode: 500060 };


						for (var item in employee1 ) {                  // for in loop condition
				   console.log(employee1[item]);
				}
						for (var item in employee2 ) {
				   console.log(employee2[item]);
				}
						for (var item in employee3 ) {
				   console.log(employee3[item]);
				}