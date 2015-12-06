'use strict';
var React = require('react-native');
var {  Image,  ListView,  StyleSheet,  Text,  View,} = React;
var SampleApp = React.createClass({  
	getInitialState: function() {    
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});    
		return {      
			dataSource: ds.cloneWithRows(this._genRows({})),    
		};  
	},  
	render: function() {    
		return (        
			<ListView          dataSource={this.state.dataSource}          
			renderRow={this._renderRow} />    
		);  
	},  
	_renderRow: function(rowData: string, sectionID: number, rowID: number) {    
		var imgSource = {      
			uri: 'http://img.wdjimg.com/image/video/64d23dde9daac32367954b7c8a803da0_0_0.jpeg',    
		};    
		return (        
			<View>         
				<View style={styles.row}>            
				<Image style={styles.thumb} source={imgSource} />            
				<Text style={styles.text}>              
					{rowData}            
				</Text>          
			</View>          
			<View style={styles.separator} />        
			</View>    
		);  
	},  
	_genRows: function(
		pressData: {
			[key: number]: boolean
		}): Array<string> {    
			var dataBlob = [];    
			for (var ii = 0; ii < 5; ii++) {      
				dataBlob.push('Row ' + ii);    
			}    
			return dataBlob;  
		},
	});
	var styles = StyleSheet.create({  
		row: {    
			flexDirection: 'row',    
			justifyContent: 'center',    
			padding: 10,    
			backgroundColor: '#F6F6F6',  
		},  
		separator: {    
			height: 1,    
			backgroundColor: '#CCCCCC',  
		},  
		thumb: {    
			width: 64,    
			height: 64,  
		},  
		text: {    
			flex: 1,  
		},
	});

	React.AppRegistry.registerComponent('SampleApp', function() { 
		return SampleApp 
	});



