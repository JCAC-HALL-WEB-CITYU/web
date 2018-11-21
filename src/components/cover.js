import React, { Component } from "react";

const styles = {
	landing:{
		width:"100%",
		margin:"0",
		padding:"0",

		display: "inline-block",

		wordSpacing: "30px"
	},
	fitContent:{
		display:"flex",
		flexDirection:"column"
	}
}

class Cover extends React.Component
{
	render()
	{
		return (
			<div >
				<div style={styles.fitContent}>
			<img style={styles.landing} src="/web/homepage/AQUATIC.png"/></div>
			</div>
		);
	}
}
export default Cover;