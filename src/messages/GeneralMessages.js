import LocalisationProvider from './LocalisationProvider';

export default class GeneralMessages {
	static get LaunchYear_Title() {
		return LocalisationProvider.getMessage('General.LaunchYear_Title');
	}
	static get SuccessfulLaunch_Title() {
		return LocalisationProvider.getMessage('General.SuccessfulLaunch_Title');
	}
	static get SuccessfulLand_Title() {
		return LocalisationProvider.getMessage('General.SuccessfulLand_Title');
	}
	static get TRUE() {
		return LocalisationProvider.getMessage('General.TRUE');
	}
	static get FALSE() {
		return LocalisationProvider.getMessage('General.FALSE');
	}
	static get Sorry() {
		return LocalisationProvider.getMessage('General.Sorry');
	}
	static get EmptyText() {
		return LocalisationProvider.getMessage('General.EmptyText');
	}
	static get Developer() {
		return LocalisationProvider.getMessage('General.Developer');
	}
}