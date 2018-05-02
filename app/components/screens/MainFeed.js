import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


class MainFeed extends Component {
	render(){

		return(

			<View style={{ flex: 1, width: 100 + "%", height: 100 + "%"}}>
				<View style={styles.tempQ}>
					<Text>Qual</Text>
				</View>

				<View style={styles.journalBar} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={{
								uri: 
									"https://lh3.googleusercontent.com/7U_SGDpbGB18p9tpfobtA_XBcey_DFCxxcZhWfqKxZKNdq6v6snHfUQnwJ3c9QeEOdcQty6zKLTFo5s72SMyOH9G"
							}} 
						/>
						<Text style={{marginLeft: 10}}>The New England Journal Of Medicine</Text>

						<View style={{alignItems: "center"}}>
						<Image
							style={styles.journalPicRight}
							source={{
								uri: 
									"https://lh3.googleusercontent.com/gCi8WmS6ORb3K8CLsLydVjL342LIFo3cVZjUfz9W6gaPaVzmVHtGfUKtrxWKjkVaT6YC7bVLFG4MxcqGc8Ywwo4K5g"
							}} 
						/>
						</View>

					</View>

					
				</View>

				
				<Image
					style={{ 
						flexDirection: "column", 
						justifyContent: "center", 
						alignItems:"center", 
						width: 320, 
						height: 145, 
						marginTop: 10, 
						marginLeft: 15}}

					source={{
						uri: "https://lh3.googleusercontent.com/m0bG1ksmbsF-028R52NfVNAJc4FBlVgD3FHaHTSrnYTcHYQMDBMmOLClsNGeyBcMeL-ZxdoFsl2jb4vNc73Z-ejLdtc"
					}} 
				/>






				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={styles.journalPicLeft}
							source={{
								uri: 
									"https://lh3.googleusercontent.com/xOd9PcWlKOjOwAK-A3H7iyoRcPYqN4BgRGd2uZZWGCG4NvuIEOd_yVel6_VvXbQO-3c3qNpz4sAg4RdRdf2_rwSAEw"
							}} 
						/>
						<Text style={{marginLeft: 10}}>JAMA Neurology                                    </Text>

						<View style={{alignItems: "center"}}>
						<Image
							style={styles.journalPicRight}
							source={{
								uri: 
									"https://lh3.googleusercontent.com/gCi8WmS6ORb3K8CLsLydVjL342LIFo3cVZjUfz9W6gaPaVzmVHtGfUKtrxWKjkVaT6YC7bVLFG4MxcqGc8Ywwo4K5g"
							}} 
						/>
						</View>

					</View>

					
				</View>

				<Image
					style={{ 
						flexDirection: "column", 
						justifyContent: "center", 
						alignItems:"center", 
						width: 320, 
						height: 120, 
						marginTop: 10, 
						marginLeft: 15}}

					source={{
						uri: "https://lh3.googleusercontent.com/H4bQL_KwrkMSUYOZVuYmqFuv24nkUtWEGJh6b1hPjzjkF6h__GaSxSgzzWceJrw9DHH4J7jDyehuNqXUvQOvkugafw"
					}} 
				/>





				<View style={styles.journalBarN} >
					<View style={{ flexDirection: "row", alignItems:"center"}}>
						<Image
							style={{
								width: 42, 
								height: 38,
								marginLeft: 10
							}}

							source={{
								uri: 
									"https://lh3.googleusercontent.com/53sKRfzQ_BfwC8BJHfPGoGY8zIBOck0qdU7zGSYJLWUfckXNbZznRa0GfhKNKvdeglVhTwfPxTPAvFlJ7pUwXmG7yJ0"
							}} 
						/>
						<Text style={{marginLeft: 10}}>NPJ Precision Oncology                        </Text>

						<View style={{alignItems: "center"}}>
						<Image
							style={styles.journalPicRight}
							source={{
								uri: 
									"https://lh3.googleusercontent.com/gCi8WmS6ORb3K8CLsLydVjL342LIFo3cVZjUfz9W6gaPaVzmVHtGfUKtrxWKjkVaT6YC7bVLFG4MxcqGc8Ywwo4K5g"
							}} 
						/>
						</View>

					</View>

					
				</View>


				<Image
					style={{ 
						flexDirection: "column", 
						justifyContent: "center", 
						alignItems:"center", 
						width: 320, 
						height: 110, 
						marginTop: 10, 
						marginLeft: 15}}

					source={{
						uri: "https://lh3.googleusercontent.com/_B2-yTwt3Le2Ge8vjgQU91xeZ0QLWT6t3r9uI-UZYLYpYP2qafDr2cW60Q9zipg2daBtSFvJq8khPisYUUHoQ6j2Sw"
					}} 
				/>

				
			</View>

		);
	
	}
}

const styles = StyleSheet.create({
	tempQ: { 
			width: 100 + "%", 
			height: 56,
			marginTop: 20,
			backgroundColor: "rgb(250,250,250)",
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

	journalBarN:{
		width: 100 + "%", 
		height: 55,
		backgroundColor: "rgb(250,250,250)",
		flexDirection:"row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 5

	},


	journalPicLeft: {
		width: 40, 
		height: 40,
		marginLeft: 10

	},

	journalPicRight: {
		width: 27, 
		height: 27,
		marginLeft: 20
	}

});

export default MainFeed;