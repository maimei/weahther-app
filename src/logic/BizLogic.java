/**
 * 
 */
package logic;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

/* Enum class for the five observation points */
import logic.ObservationPoint;

/**
 * @author helena
 *
 */
public class BizLogic {

	// list storing all weather data	
	private List<ArrayList<Double>> weatherData = new ArrayList<ArrayList<Double>>(); 	
	
	public BizLogic() {
		// create 5 empty weather lists, 1 for each place
		for(int i = 0; i<ObservationPoint.values().length; i++) {
			this.weatherData.add(new ArrayList<Double>());
		}
		randomWeatherData();
		//printWeatherData();
	}
	
	/*
	 * Fill weather lists with random weather data
	 */
	public void randomWeatherData() {
		
		// number of weather entries at each point
		int numWeatherData = 5;
		
		Random r = new Random(); //maybe make global variable
		double rMin = -10.0;
		double rMax = 30.0;
		
		for(int i = 0; i<ObservationPoint.values().length; i++) {
			for(int j = 0; j<numWeatherData; j++) {
				double randomVal = rMin + (rMax - rMin) * r.nextDouble();
				
				// round double to one decimal
				double val = Double.parseDouble(String.format("%.1f", randomVal));
				weatherData.get(i).add(val);
			}
		}
		//System.out.println(weatherData);
	}
	
	/*
	 * Visualize weather data as printout
	 */
	public void printWeatherData() {
		for(int i = 0; i<ObservationPoint.values().length; i++) {
			System.out.println(weatherData.get(i));
		}
	}
	
	/**
	 * This function returns the daily maximum value of the given observation point place
	 * @param place
	 * 	The observation point
	 *  TODO: get right data (from DB, last 24hrs)
	 */
	public double getDailyMax(ObservationPoint place) {
		//System.out.print(place.ordinal());
		
		// get weather data of the requested place
		ArrayList<Double> placeData = weatherData.get(place.ordinal());
		
		//System.out.println(placeData);
		return Collections.max(placeData);
	}
	
	/**
	 * This function returns the daily minimum value of the given observation point place
	 * @param place
	 * 	The observation point
	 *  TODO: get right data (from DB)
	 */
	public double getDailyMin(ObservationPoint place) {
		
		// get weather data of the requested place
		ArrayList<Double> placeData = weatherData.get(place.ordinal());
		
		//System.out.println(placeData);
		return Collections.min(placeData);
	}
	
	public List<ArrayList<Double>> returnWeatherData() {
		return weatherData;
	}
	
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		BizLogic logic = new BizLogic();
		System.out.println(logic.getDailyMax(ObservationPoint.AMSTERDAM));
		System.out.println(logic.getDailyMin(ObservationPoint.AMSTERDAM));
			//print all available obersation points
		/*
			for (ObservationPoint s : ObservationPoint.values())  
				System.out.println(s);  
			}*/
		
	}
}