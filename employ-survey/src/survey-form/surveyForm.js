import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./surveyForm.css"

const SurveyForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        date: new Date(),
        overallJobSatisfyLevel: "",
        Salary:"",
        overAllBenefits:"",
        healthBenefits:"",
        physicalWorkEnv:"",
        seniorLeadership:"",
        individualManagement:"",
        performanceFeedback:"",
        employEvaluation:"",
        recognition:"",
        trainingOpportunity:"",
        advancementOpportunity:"",
        valuedAtWork: "",
        pleaseExplain1: "",
        resourcesAtWork: "",
        pleaseExplain2: "",
        jobStress: "",
        pleaseExplain3: "",
        sufficientEffortsToColleaguesOpinion: "",
        pleaseExplain4: "",
        additionalFeedback:"",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string().required("firstName is required"),
        lastName: Yup.string().required("lastName is required"),
        date: Yup.date().default(() => new Date()),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
          <h1>Employee Satisfaction Survey</h1>
          <hr/>
        <div className="name">
            <div className="firstName">
                <label htmlFor="firstName" >First Name</label>
                <br/>
                <Field name="firstName" type="text" className="firstNameIp"/>
                <ErrorMessage name="firstName" />
            </div>
            <div className="lastName">
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <Field name="lastName" type="text" className="lastNameIp"/>
                <ErrorMessage name="lastName" />
            </div>
        </div>

        <div className="date">
            <label htmlFor="date">Date</label>
            <br />
            <Field name="date" type="date"/>
            <ErrorMessage name="date" />
            <br />
        </div>

        <div className="jobSatisfaction">
        <label htmlFor="overallJobSatisfyLevel">
          How would you describe your overall level of job satisfaction?
        </label>
        <br />
        <div role="group" aria-labelledby="my-radio-group">
          <label>
            <Field
              type="radio"
              name="overallJobSatisfyLevel"
              value="verySatisfied"
            />
            Very satisfied
          </label>
          <br />
          <label>
            <Field
              type="radio"
              name="overallJobSatisfyLevel"
              value="somewhatSatisfied"
            />
            Somewhat satisfied
          </label>
          <br />
          <label>
            <Field type="radio" name="overallJobSatisfyLevel" value="neutral" />
            Neutral
          </label>
          <br />
          <label>
            <Field
              type="radio"
              name="overallJobSatisfyLevel"
              value="somewhatdissatisfied"
            />
            Something dissatisfied
          </label>
          <br />
          <label>
            <Field
              type="radio"
              name="overallJobSatisfyLevel"
              value="verydissatisfied"
            />
            Very dissatisfied
          </label>
          <br />
        </div>
        </div>

        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th></th>
                    <th>Very Poor</th>
                    <th>Poor</th>
                    <th>Average</th>
                    <th>Good</th>
                    <th>Excellent</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Salary</td>
                    <td><label><Field type="radio" name="Salary" value="salaryVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="Salary" value="salaryPoor"/></label></td>
                    <td><label><Field type="radio" name="Salary" value="salaryAverage"/></label></td>
                    <td><label><Field type="radio" name="Salary" value="salaryGood"/></label></td>
                    <td><label><Field type="radio" name="Salary" value="salaryExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Overall benefits</td>
                    <td><label><Field type="radio" name="overAllBenefits" value="overAllBenefitsVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="overAllBenefits" value="overAllBenefitsPoor"/></label></td>
                    <td><label><Field type="radio" name="overAllBenefits" value="overAllBenefitsAverage"/></label></td>
                    <td><label><Field type="radio" name="overAllBenefits" value="overAllBenefitsGood"/></label></td>
                    <td><label><Field type="radio" name="overAllBenefits" value="overAllBenefitsExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Health benefits</td>
                    <td><label><Field type="radio" name="healthBenefits" value="healthBenefitsVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="healthBenefits" value="healthBenefitsPoor"/></label></td>
                    <td><label><Field type="radio" name="healthBenefits" value="healthBenefitsAverage"/></label></td>
                    <td><label><Field type="radio" name="healthBenefits" value="healthBenefitsGood"/></label></td>
                    <td><label><Field type="radio" name="healthBenefits" value="healthBenefitsExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Physical work environment</td>
                    <td><label><Field type="radio" name="physicalWorkEnv" value="physicalWorkEnvVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="physicalWorkEnv" value="physicalWorkEnvPoor"/></label></td>
                    <td><label><Field type="radio" name="physicalWorkEnv" value="physicalWorkEnvAverage"/></label></td>
                    <td><label><Field type="radio" name="physicalWorkEnv" value="physicalWorkEnvGood"/></label></td>
                    <td><label><Field type="radio" name="physicalWorkEnv" value="physicalWorkEnvExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Senior Leadership</td>
                    <td><label><Field type="radio" name="seniorLeadership" value="seniorLeadershipVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="seniorLeadership" value="seniorLeadershipPoor"/></label></td>
                    <td><label><Field type="radio" name="seniorLeadership" value="seniorLeadershipAverage"/></label></td>
                    <td><label><Field type="radio" name="seniorLeadership" value="seniorLeadershipGood"/></label></td>
                    <td><label><Field type="radio" name="seniorLeadership" value="seniorLeadershipExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Individual Management</td>
                    <td><label><Field type="radio" name="individualManagement" value="individualManagementVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="individualManagement" value="individualManagementPoor"/></label></td>
                    <td><label><Field type="radio" name="individualManagement" value="individualManagementAverage"/></label></td>
                    <td><label><Field type="radio" name="individualManagement" value="individualManagementGood"/></label></td>
                    <td><label><Field type="radio" name="individualManagement" value="individualManagementExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Performance Feedback</td>
                    <td><label><Field type="radio" name="performanceFeedback" value="performanceFeedbackVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="performanceFeedback" value="performanceFeedbackPoor"/></label></td>
                    <td><label><Field type="radio" name="performanceFeedback" value="performanceFeedbackAverage"/></label></td>
                    <td><label><Field type="radio" name="performanceFeedback" value="performanceFeedbackGood"/></label></td>
                    <td><label><Field type="radio" name="performanceFeedback" value="performanceFeedbackExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Employee evaluations</td>
                    <td><label><Field type="radio" name="employEvaluation" value="employEvaluationVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="employEvaluation" value="employEvaluationPoor"/></label></td>
                    <td><label><Field type="radio" name="employEvaluation" value="employEvaluationAverage"/></label></td>
                    <td><label><Field type="radio" name="employEvaluation" value="employEvaluationGood"/></label></td>
                    <td><label><Field type="radio" name="employEvaluation" value="employEvaluationExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Recognition</td>
                    <td><label><Field type="radio" name="recognition" value="recognitionVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="recognition" value="recognitionPoor"/></label></td>
                    <td><label><Field type="radio" name="recognition" value="recognitionAverage"/></label></td>
                    <td><label><Field type="radio" name="recognition" value="recognitionGood"/></label></td>
                    <td><label><Field type="radio" name="recognition" value="recognitionExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Training Opportunities</td>
                    <td><label><Field type="radio" name="trainingOpportunity" value="trainingOpportunityVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="trainingOpportunity" value="trainingOpportunityPoor"/></label></td>
                    <td><label><Field type="radio" name="trainingOpportunity" value="trainingOpportunityAverage"/></label></td>
                    <td><label><Field type="radio" name="trainingOpportunity" value="trainingOpportunityGood"/></label></td>
                    <td><label><Field type="radio" name="trainingOpportunity" value="trainingOpportunityExcellent"/></label></td>
                </tr>
                <tr>
                    <td>Opportunities for Advancement</td>
                    <td><label><Field type="radio" name="advancementOpportunity" value="advancementOpportunityVeryPoor"/></label></td>
                    <td><label><Field type="radio" name="advancementOpportunity" value="advancementOpportunityPoor"/></label></td>
                    <td><label><Field type="radio" name="advancementOpportunity" value="advancementOpportunityAverage"/></label></td>
                    <td><label><Field type="radio" name="advancementOpportunity" value="advancementOpportunityGood"/></label></td>
                    <td><label><Field type="radio" name="advancementOpportunity" value="advancementOpportunityExcellent"/></label></td>
                </tr>
            </tbody>
        </table>

        <div className="yesNo1">
          <label htmlFor="valuedAtWork">Do you feel valued at work?</label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="valuedAtWork" value="Yes" />
              Yes
            </label>
            <br />
            <label>
              <Field type="radio" name="valuedAtWork" value="No" />
              No
            </label>
            <br />
          </div>

          <label htmlFor="pleaseExplain1">If No, Please Explain</label>
          <br />
          <Field
            type="textarea"
            style={{ width: "100%", height: "10em" }}
            name="pleaseExplain1"
            className="textarea"
          />
          <br />
        </div>

        <div className="yesNo2">
          <label htmlFor="resourcesAtWork">
            Do you have the resources you need to perform your job well?
          </label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="resourcesAtWork" value="Yes" />
              Yes
            </label>
            <br />
            <label>
              <Field type="radio" name="resourcesAtWork" value="No" />
              No
            </label>
            <br />
          </div>

          <label htmlFor="pleaseExplain2">If No, Please Explain</label>
          <br />
          <Field
            type="textarea"
            style={{ width: "100%", height: "10em" }}
            name="pleaseExplain2"
            className="textarea"
          />
          <br />
        </div>

        <div className="yesNo3">
          <label htmlFor="jobStress">
            Does your job cause you stress or anxiety?
          </label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="jobStress" value="Yes" />
              Yes
            </label>
            <br />
            <label>
              <Field type="radio" name="jobStress" value="No" />
              No
            </label>
            <br />
          </div>

          <label htmlFor="pleaseExplain3">If Yes, Please Explain</label>
          <br />
          <Field
            type="textarea"
            style={{ width: "100%", height: "10em" }}
            name="pleaseExplain3"
            className="textarea"
          />
          <br />
        </div>

        <div className="yesNo4">
          <label htmlFor="sufficientEffortsToColleaguesOpinion">
            Are sufficient efforts being made to solicit colleague opinions and
            feedback?
          </label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field
                type="radio"
                name="sufficientEffortsToColleaguesOpinion"
                value="Yes"
              />
              Yes
            </label>
            <br />
            <label>
              <Field
                type="radio"
                name="sufficientEffortsToColleaguesOpinion"
                value="No"
              />
              No
            </label>
            <br />
          </div>

          <label htmlFor="pleaseExplain4">If Yes, Please Explain</label>
          <br />
          <Field
            type="textarea"
            style={{ width: "100%", height: "10em" }}
            name="pleaseExplain4"
            className="textarea"
          />
          <br />
        </div>

        <Field
          type="textarea"
          style={{ width: "100%", height: "10em" }}
          name="additionalFeedback"
          placeholder="Type here..."
          className="textarea"
        />

        <br/>

        <div className="button">
        <input type="submit" value="Submit"/>
        </div>
      </Form>
    </Formik>
  );
};

export default SurveyForm;
