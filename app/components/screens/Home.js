import React, { Component } from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

class Home extends Component {
	render(){
		return (
			<View style = {{height: 100 + '%', width: 100 + '%',flex: 1}}>

				<View style = {styles.tempQ}>
					<Text style = {{color: "white", fontWeight: 'bold'}}>Homepage</Text>
				</View>





			{/* first box */}
		        <View style={styles.boxstyle} >
			        <View style={{ flexDirection: "row", alignItems:"center"}}>
				        <Image
								style={styles.journalPicLeft}
								source={{
									uri: 
									"https://lh3.googleusercontent.com/ub07d_BPqksyNKgRmhDuipVk_guRQonBsT_uAZbks-DvxnmEWM94KpjHDwci2jz4Qe84pTZDo2x1uMQj4pTljroUyQ"
						}} />



						<View style = {{flexDirection: "column", alignItems:"center"}}>
							<Text style={styles.username}>Sherry Z</Text>
							<Text style={{marginLeft: 13, fontSize: 8}}>Brain Surgeon</Text>
						</View>


						<View style = {{flexDirection:'row',marginLeft: 120}}>
							<Text style = {{color :'red', fontWeight: "bold"}}>VIP Center</Text>
	        				<Image 
	        					style = {{marginLeft: 5, marginTop: 4, height: 10, width: 10}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/D--9UqGBFJDMtD50DRjTpcqe5BT0_hTbKucyKXypNdLtOGnfpv1TVQuDcN-B-tec8AUvMYXhizrqM3BSYxXf5CetfA"
								}}
							/>
						</View>

					</View>

		        </View>








		    {/* second box */}
		        <View style={styles.boxstyle} >
		        	<View style={{ flexDirection: "row", alignItems:"center"}}>

		        		<View style = {{flexDirection:"column"}}>
		        			{/* first interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> Brain cancer </Text>
		        			</View>


		        			{/* second interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> Neuroscience </Text>
		        			</View>


		        			{/* third interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> Coronary Disease </Text>
		        			</View>
		        	
		        		</View>


		        		<View style = {{flexDirection:"column",position: 'absolute', top: -7, right: 10}}>
		        			<Text style = {{color: 'red', fontWeight:"bold"}}> Interests</Text>

	        				<Image 
	        					style = {{marginLeft: 43, marginTop: 50, height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>

		        		</View>



		        		<View style = {{flexDirection:"column",position: 'absolute', top: -7, right: 10}}>
		        			<Text style = {{color: 'red', fontWeight:"bold"}}> Interests</Text>

	        				<Image 
	        					style = {{marginLeft: 43, marginTop: 50, height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>

		        		</View>




		        	</View>


		        </View>






		   	 {/* third box */}
		        <View style={styles.boxstyle} >
		        	<View style={{ flexDirection: "row", alignItems:"center"}}>

		        		<View style = {{flexDirection:"column"}}>
		        			{/* first interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> JAMA </Text>
		        			</View>


		        			{/* second interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> Micromedex</Text>
		        			</View>


		        			{/* third interest */}
		        			<View style = {{marginLeft: 4, marignTop: 5, marginBottom: 5}}>
		        				<Text> JMIR </Text>
		        			</View>
		        	
		        		</View>



		        		<View style = {{flexDirection:"column",position: 'absolute', top: -7, right: 10}}>
		        			<Text style = {{color: 'red', fontWeight:"bold"}}> Following</Text>

	        				<Image 
	        					style = {{marginLeft: 43, marginTop: 50, height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>

		        		</View>




		        	</View>


		        </View>



				{/* fourth box => personal background */}
				<View style = {{marginTop: 10, marginLeft: 10}}>
			        <Text style={{color: 'red', marginLeft: 4}}>
			          Persional background
			        </Text>
		        </View>



		        <View style={styles.smallboxstyle} >
	        			{/* first background */}
	        			
        				<Text style = {{marginLeft: 4, marginTop: 10}}> Brain Surgeon </Text>

        				<Text style = {{marginLeft: 170, marginTop: 10, color: 'red'}}> Change </Text>

        				<Image 
        					style = {{marginLeft: 5, marginTop: 16, height: 10, width: 10}}
		        			source= {{
								uri:"https://lh3.googleusercontent.com/D--9UqGBFJDMtD50DRjTpcqe5BT0_hTbKucyKXypNdLtOGnfpv1TVQuDcN-B-tec8AUvMYXhizrqM3BSYxXf5CetfA"
							}}
						/>

		        </View>




				{/* fifth box => Browsing History */}
				<View style = {{marginTop: 10, marginLeft: 10}}>
			        <Text style={{color: 'red', marginLeft: 4}}>
			          Browsing history
			        </Text>
		        </View>



		        <View style={styles.largeboxstyle} >
	        			{/* first background */}
	        			<View style = {{flexDirection: 'column', marginLeft: 4, width:83+ '%'}}>
							<Text style = {{ marginLeft: 4, marginTop: 10, marginBottom:4}}> Hybrid Strategy to Prevent Venous Thromboembolism after Joint Arthroplasty... </Text>
	        				<Text style = {{ marginLeft: 4, marginTop: 10, marginBottom:4}}> Electromechanical Vortex Filaments During Cardiac Fibrillation...</Text>
	        				<Text style = {{ marginLeft: 4, marginTop: 10, marginBottom:4}}>A Review of the Current Therapies, Challenges, and 
																							Future Directions of Transcranial Focused Ultrasound 
																							Technology...</Text>
	        			</View>


	        			<View style = {{flexDirection: 'row',  marginTop: 170, marginRight: 10 }}>
	        				<Text style = {{color: 'red', marginLeft: -5}}> More </Text>
	        				<Image 
	        					style = {{marginTop: 3, marginLeft: 2,  height: 12, width: 12}}
			        			source= {{
									uri:"https://lh3.googleusercontent.com/zk9zn4EyU0x01hI2p0SFisYcG6WJQkggvaJzgb-On-aqEdFqfzv3ZM_I9f2qD59VRZrIz2riEfTTadjgGSZ_OiKkLA"
								}}
							/>	        				

	        			</View>






		        </View>







			</View>

		);

	}
}




const styles = StyleSheet.create({
	tempQ: { 
			width: 100 + "%", 
			height: 56,
			marginTop: 20,
			backgroundColor: "rgb(153,220,230)",
			borderBottomColor: "rgb(233,233,233)",
			borderBottomWidth: StyleSheet.hairlineWidth,
			justifyContent: "center",
			alignItems: "center"
	},

	journalBar:{
		width: 100 + "%", 
		height: 55,
		backgroundColor: "rgb(250,250,250)",
		flexDirection:"row",
		justifyContent: "center"

	},

	boxstyle:{

    	width: 95 + '%', 
    	height: 100,
    	borderRadius:10, 
    	backgroundColor: 'white',
    	borderWidth: 1,
    	borderColor: 'rgb(218, 218, 218)',
    	justifyContent: "center",
      	marginVertical: 5,
		marginHorizontal: 10		
	},

	journalPicLeft: {
		width: 50, 
		height: 50,
		marginLeft: 10,
		borderRadius:25,

	},

	username: {
		marginLeft: 10, 
		marginBottom: 5,
		fontWeight: 'bold'
	},


	smallboxstyle:{

		flexDirection:"row",
    	width: 95 + '%', 
    	height: 40,
    	borderRadius:10, 
    	backgroundColor: 'white',
    	borderWidth: 1,
    	borderColor: 'rgb(218, 218, 218)',
      	marginVertical: 5,
		marginHorizontal: 10		
	},


	largeboxstyle:{

		flexDirection:"row",
    	width: 95 + '%', 
    	height: 210,
    	borderRadius:10, 
    	backgroundColor: 'white',
    	borderWidth: 1,
    	borderColor: 'rgb(218, 218, 218)',
      	marginVertical: 5,
		marginHorizontal: 10		
	},



});







export default Home;