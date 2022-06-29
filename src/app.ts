import DataType from "./enum/DataType";
import Scrape from "./helpers/Scrape";
import Environment from "./config/Environment";

const main = async () => {
	switch (Environment.DATA_TYPE) {
		case DataType.JOB: {
			await Scrape.initJobs();
			console.info("Jobs Extraction Successfully");
			break;
		}
		case DataType.OFFER: {
			await Scrape.initOffers();
			console.info("Offers Extraction Successfully");
			break;
		}
		default: throw new Error("Invalid Option");
	}

};

main();