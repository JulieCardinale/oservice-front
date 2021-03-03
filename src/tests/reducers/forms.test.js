/* Import : should */
import { should } from 'chai';

/* Import : reducer to test */
import formsReducer, { initialState } from 'reducers/forms';

/* Import : action to test */
import { formFieldOnChange, FORM_FIELD_ON_CHANGE } from 'actions/forms';

/* Run should */
should();

/*
 * Forms reducer tests
 */
describe('Forms reducer tests', () => {
  /*
   * --------------------------------------------------------------------
   * Basics
   * --------------------------------------------------------------------
   * It should be a function
   * It should return an object when call without argument
   * It should return the initialState when called without argument
   * --------------------------------------------------------------------
   */
  describe('Basics', () => {
    it('should be a function', () => {
      formsReducer.should.be.a('function');
    });
    it('should return an object when call without argument', () => {
      formsReducer().should.be.an('object');
    });
    it('should return the initialState when called without argument', () => {
      formsReducer().should.be.equal(initialState);
    });
  });
  /*
   * --------------------------------------------------------------------
   * initialState structure
   * --------------------------------------------------------------------
   * It should include userForm
   * It should include authForm
   * It should include announcementForm
   * It should include firstContactForm
   * It should include conversationForm
   * It should include categoryFilterForm
   * It should include cityFilterForm
   * --------------------------------------------------------------------
   */
  describe('initialState structure', () => {
    it('should include userForm', () => {
      formsReducer().should.to.include.key('userForm');
      initialState.userForm.should.to.have.keys(
        'userFormPicturePreview',
        'userFormPictureFormData',
        'userFormPictureId',
        'userFormLastname',
        'userFormFirstname',
        'userFormSex',
        'userFormBirthdate',
        'userFormEmail',
        'userFormAddress',
        'userFormPostCode',
        'userFormCityName',
        'userFormDescription',
        'userFormPassword',
        'userFormPasswordConfirmation'
      );
    });
    it('should include authForm', () => {
      formsReducer().should.to.include.key('authForm');
      initialState.authForm.should.to.have.keys(
        'authFormEmail',
        'authFormPassword'
      );
    });
    it('should include announcementForm', () => {
      formsReducer().should.to.include.key('announcementForm');
      initialState.announcementForm.should.to.have.keys(
        'announcementFormPicturePreview',
        'announcementFormPictureFormData',
        'announcementFormPictureId',
        'announcementFormTitle',
        'announcementFormCategoryId',
        'announcementFormCategoryName',
        'announcementFormPostcode',
        'announcementFormCityName',
        'announcementFormCityDepartmentCode',
        'announcementFormCityId',
        'announcementFormDescription'
      );
    });
    it('should include firstContactForm', () => {
      formsReducer().should.to.include.key('firstContactForm');
      initialState.firstContactForm.should.to.have.key(
        'firstContactFormMessageValue'
      );
    });
    it('should include conversationForm', () => {
      formsReducer().should.to.include.key('conversationForm');
      initialState.conversationForm.should.to.have.key(
        'conversationFormMessageValue'
      );
    });
    it('should include categoryFilterForm', () => {
      formsReducer().should.to.include.key('categoryFilterForm');
      initialState.categoryFilterForm.should.to.have.keys(
        'categoryFilterFormCategoryName',
        'categoryFilterFormCategoryId'
      );
    });
    it('should include cityFilterForm', () => {
      formsReducer().should.to.include.key('cityFilterForm');
      initialState.cityFilterForm.should.to.have.keys(
        'cityFilterFormCityName',
        'cityFilterFormCityId'
      );
    });
  });
  /*
   * --------------------------------------------------------------------
   * Actions
   * --------------------------------------------------------------------
   * FORM_FIELD_ON_CHANGE
   * --------------------------------------------------------------------
   */
  describe('Actions', () => {
    describe(FORM_FIELD_ON_CHANGE, () => {
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE
       * --------------------------------------------------------------------
       * It should change any form field value using form name & field key
       * --------------------------------------------------------------------
       */
      it('should change any form field value using form name & field key', () => {
        const action = formFieldOnChange(
          'usedForm',
          'usedField',
          'change field value'
        );
        formsReducer({}, action).should.be.eql({
          usedForm: {
            usedField: 'change field value',
          },
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in userForm
       * --------------------------------------------------------------------
       * It should be able to change only : userFormPicturePreview
       * It should be able to change only : userFormPictureFormData
       * It should be able to change only : userFormPictureId
       * It should be able to change only : userFormLastName
       * It should be able to change only : userFormFirstName
       * It should be able to change only : userFormSex
       * It should be able to change only : userFormBirthdate
       * It should be able to change only : userFormEmail
       * It should be able to change only : userFormAddress
       * It should be able to change only : userFormPostCode
       * It should be able to change only : userFormCityName
       * It should be able to change only : userFormDescription
       * It should be able to change only : userFormPassword
       * It should be able to change only : userFormPasswordConfirmation
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in userForm', () => {
        it('should be able to change only : userFormPicturePreview', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPicturePreview',
            'user picture preview value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPicturePreview: 'user picture preview value',
            },
          });
        });
        it('should be able to change only : userFormPictureFormData', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPictureFormData',
            'user picture datas value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPictureFormData: 'user picture datas value',
            },
          });
        });
        it('should be able to change only : userFormPictureId', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPictureId',
            'user picture id value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPictureId: 'user picture id value',
            },
          });
        });
        it('should be able to change only : userFormLastName', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormLastName',
            'user last name value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormLastName: 'user last name value',
            },
          });
        });
        it('should be able to change only : userFormFirstName', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormFirstName',
            'user first name value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormFirstName: 'user first name value',
            },
          });
        });
        it('should be able to change only : userFormSex', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormSex',
            'user sex value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormSex: 'user sex value',
            },
          });
        });
        it('should be able to change only : userFormBirthdate', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormBirthdate',
            'user birthdate value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormBirthdate: 'user birthdate value',
            },
          });
        });
        it('should be able to change only : userFormEmail', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormEmail',
            'user email value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormEmail: 'user email value',
            },
          });
        });
        it('should be able to change only : userFormAddress', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormAddress',
            'user address value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormAddress: 'user address value',
            },
          });
        });
        it('should be able to change only : userFormPostCode', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPostCode',
            'user postcode value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPostCode: 'user postcode value',
            },
          });
        });
        it('should be able to change only : userFormCityName', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormCityName',
            'user city value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormCityName: 'user city value',
            },
          });
        });
        it('should be able to change only : userFormDescription', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormDescription',
            'user description value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormDescription: 'user description value',
            },
          });
        });
        it('should be able to change only : userFormPassword', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPassword',
            'user password value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPassword: 'user password value',
            },
          });
        });
        it('should be able to change only : userFormPasswordConfirmation', () => {
          const action = formFieldOnChange(
            'userForm',
            'userFormPasswordConfirmation',
            'user password confirmation value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            userForm: {
              ...initialState.userForm,
              userFormPasswordConfirmation: 'user password confirmation value',
            },
          });
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in authForm
       * --------------------------------------------------------------------
       * It should be able to change only : authFormEmail
       * It should be able to change only : authFormPassword
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in authForm', () => {
        it('should be able to change only : authFormEmail', () => {
          const action = formFieldOnChange(
            'authForm',
            'authFormEmail',
            'user email value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            authForm: {
              ...initialState.authForm,
              authFormEmail: 'user email value',
            },
          });
        });
        it('should be able to change only : authFormPassword', () => {
          const action = formFieldOnChange(
            'authForm',
            'authFormPassword',
            'user password value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            authForm: {
              ...initialState.authForm,
              authFormPassword: 'user password value',
            },
          });
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in announcementForm
       * --------------------------------------------------------------------
       * It should be able to change only : announcementFormPicturePreview
       * It should be able to change only : announcementFormPictureFormData
       * It should be able to change only : announcementFormPictureId
       * It should be able to change only : announcementFormTitle
       * It should be able to change only : announcementFormCategoryId
       * It should be able to change only : announcementFormCategoryName
       * It should be able to change only : announcementFormPostcode
       * It should be able to change only : announcementFormCityName
       * It should be able to change only : announcementFormCityDepartmentCode
       * It should be able to change only : announcementFormDescription
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in announcementForm', () => {
        it('should be able to change only : announcementFormPicturePreview', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormPicturePreview',
            'announcement picture preview value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormPicturePreview:
                'announcement picture preview value',
            },
          });
        });
        it('should be able to change only : announcementFormPictureFormData', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormPictureFormData',
            'announcement picture datas value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormPictureFormData:
                'announcement picture datas value',
            },
          });
        });
        it('should be able to change only : announcementFormTitle', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormTitle',
            'announcement picture title value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormTitle: 'announcement picture title value',
            },
          });
        });
        it('should be able to change only : announcementFormCategoryId', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormCategoryId',
            'announcement category id value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormCategoryId: 'announcement category id value',
            },
          });
        });
        it('should be able to change only : announcementFormCategoryName', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormCategoryName',
            'announcement category name value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormCategoryName: 'announcement category name value',
            },
          });
        });
        it('should be able to change only : announcementFormPostcode', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormPostcode',
            'announcement postcode value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormPostcode: 'announcement postcode value',
            },
          });
        });
        it('should be able to change only : announcementFormCityName', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormCityName',
            'announcement city name value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormCityName: 'announcement city name value',
            },
          });
        });
        it('should be able to change only : announcementFormCityDepartmentCode', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormCityDepartmentCode',
            'announcement department code value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormCityDepartmentCode:
                'announcement department code value',
            },
          });
        });
        it('should be able to change only : announcementFormDescription', () => {
          const action = formFieldOnChange(
            'announcementForm',
            'announcementFormDescription',
            'announcement description value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            announcementForm: {
              ...initialState.announcementForm,
              announcementFormDescription: 'announcement description value',
            },
          });
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in firstContactForm
       * --------------------------------------------------------------------
       * It should be able to change only : firstContactFormMessageValue
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in firstContactForm', () => {
        it('should be able to change only : firstContactFormMessageValue', () => {
          const action = formFieldOnChange(
            'firstContactForm',
            'firstContactFormMessageValue',
            'contact form message value'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            firstContactForm: {
              ...initialState.firstContactForm,
              firstContactFormMessageValue: 'contact form message value',
            },
          });
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in categoryFilterForm
       * --------------------------------------------------------------------
       * It should be able to change only : categoryFilterFormCategoryName
       * It should be able to change only : categoryFilterFormCategoryId
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in categoryFilterForm', () => {
        it('should be able to change only : categoryFilterFormCategoryName', () => {
          const action = formFieldOnChange(
            'categoryFilterForm',
            'categoryFilterFormCategoryName',
            'category name'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            categoryFilterForm: {
              ...initialState.categoryFilterForm,
              categoryFilterFormCategoryName: 'category name',
            },
          });
        });
        it('should be able to change only : categoryFilterFormCategoryId', () => {
          const action = formFieldOnChange(
            'categoryFilterForm',
            'categoryFilterFormCategoryId',
            'category id'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            categoryFilterForm: {
              ...initialState.categoryFilterForm,
              categoryFilterFormCategoryId: 'category id',
            },
          });
        });
      });
      /*
       * --------------------------------------------------------------------
       * FORM_FIELD_ON_CHANGE used in cityFilterForm
       * --------------------------------------------------------------------
       * It should be able to change only : cityFilterFormCityName
       * It should be able to change only : cityFilterFormCityId
       * --------------------------------------------------------------------
       */
      describe('FORM_FIELD_ON_CHANGE used in cityFilterForm', () => {
        it('should be able to change only : cityFilterFormCityName', () => {
          const action = formFieldOnChange(
            'cityFilterForm',
            'cityFilterFormCityName',
            'city name'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            cityFilterForm: {
              ...initialState.cityFilterForm,
              cityFilterFormCityName: 'city name',
            },
          });
        });
        it('should be able to change only : cityFilterFormCityId', () => {
          const action = formFieldOnChange(
            'cityFilterForm',
            'cityFilterFormCityId',
            'city id'
          );
          formsReducer(initialState, action).should.be.eql({
            ...initialState,
            cityFilterForm: {
              ...initialState.cityFilterForm,
              cityFilterFormCityId: 'city id',
            },
          });
        });
      });
    });
  });
});
