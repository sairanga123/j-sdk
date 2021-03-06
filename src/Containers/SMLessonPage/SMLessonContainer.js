import React from 'react';
import './Styles/SMLessonContainer.css'; 
import SMLessonPage from './SMLessonPage.js'; 
import SMLessonIntro from './SMLessonIntro.js'; 
import UploadForm from '../../Components/UploadForm/UploadForm.js'; 
import SocialMediaStart from '../../Components/SocialMediaStart/SocialMediaStart.js'; 
import ModalComp from '../../Components/ModalComp/ModalComp.js'; 
import LoadingComp from '../../Components/LoadingComp/LoadingComp.js';
import Adwords from '../../Components/Adwords/Adwords.js'; 
import CreateAdPart1 from '../../Components/CreateAdPart1/CreateAdPart1.js'; 
import CreateAdPart2 from '../../Components/CreateAdPart2/CreateAdPart2.js'; 
import UsersReached from '../../Components/UsersReached/UsersReached.js'; 
import VisualizationComp from '../../Components/VisualizationComp/VisualizationComp.js'; 
import LessonsComp from '../../Components/LessonsComp/LessonsComp.js'; 
import LessonsComp2 from '../../Components/LessonsComp2/LessonsComp2.js'; 
import CircleAdComp from '../../Components/CircleAdComp/CircleAdComp.js'; 
import LearnPage from '../../Containers/LearnPage/LearnPage.js'; 
import { timingSafeEqual } from 'crypto';
import { thistle } from 'color-name';

let compLoaded = false; 
class SMLessonContainer extends React.Component {
    constructor(props) {
      super(props); 
        this.timeout = 5000; 
        this.state = {  
            page: 0, 
            lessonIntro: true, 
            loadingCompHidden: true, 
            adwords:[],
            modal: false, 
            adwords2: ["7-Eleven",
            "8Shit",
            "9GAG",
            "A cappella",
            "A. R. Rahman",
            "Action movies",
            "Action-adventure game",
            "Adobe Photoshop",
            "Adventure film",
            "Air travel",
            "Airline",
            "Akon",
            "Lebron James"]
        } 

        this.changeComponent = this.changeComponent.bind(this); 
        this.goBack = this.goBack.bind(this); 
        this.onSubmitClicked = this.onSubmitClicked.bind(this); 
        this.onModalClicked = this.onModalClicked.bind(this); 
        this.onExitClicked = this.onExitClicked.bind(this); 
        this.onAdwordClicked = this.onAdwordClicked.bind(this); 
        this.bannerAdsChanged = this.bannerAdsChanged.bind(this); 
        this.postAdsChanged = this.postAdsChanged.bind(this); 
        this.videoAdsChanged = this.videoAdsChanged.bind(this); 
    }

    onSubmitClicked(newResult, words) {
        this.setState({ 
          loadingCompHidden: newResult,
          adwords: words
        }); 
        console.log(this.state.page); 
        this.dotColorForwards(); 
    }

    onAdwordClicked(selectedAdWord) {
        this.setState({ 
          page: this.state.page+1,
          selectedWord: selectedAdWord
        }); 
        this.dotColorForwards(); 

      }

    onModalClicked(flip) {
        this.setState({
          modal:flip
        }); 
  
        console.log(flip); 
      }
  
      onExitClicked(flip) {
        this.setState({
          modal:flip 
        }); 
      }

    changeComponent() {
        this.setState({
            page:this.state.page+1 
        }); 

        this.dotColorForwards();  
    }

    goBack() {
        this.setState({
            page:this.state.page-1 
        }); 

        let buttons2 = document.querySelector("#SMLessonContainer_buttons > p");
        buttons2.style.marginLeft = "50vw"; 
    }

    budgetChanged(number) {
        this.setState({
            budget: number 
        })
    }

    postAdsChanged(post) {
        this.setState({
            postAds: post 
        })
    }
    bannerAdsChanged(banner) {
        this.setState({
            bannerAds: banner 
        })
    }
    videoAdsChanged(video) {
        this.setState({
            videoAds: video 
        })
    }

    getEngagement(reach,weeks) {
        this.setState({
            usersReached:reach 
        })
    }; 

    dotColorForwards() {
        if(this.state.page == 0) {
            document.getElementById("SMLessonContainer_cicles_dot1").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot2").style.backgroundColor = "#0075C4";
        } 
        if(this.state.page == 1) {
            document.getElementById("SMLessonContainer_cicles_dot2").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot3").style.backgroundColor = "#0075C4";
            let buttons = document.getElementById("SMLessonContainer_buttons"); 
            buttons.style.display = "none";
            console.log(compLoaded); 
        }
        if(this.state.page == 2) {
            document.getElementById("SMLessonContainer_cicles_dot3").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot4").style.backgroundColor = "#0075C4";
        }
        if(this.state.page == 3) {
            let buttons = document.getElementById("SMLessonContainer_buttons"); 
            buttons.style.display = "flex"; 
            document.getElementById("SMLessonContainer_cicles_dot4").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot5").style.backgroundColor = "#0075C4";
            let buttons2 = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttons2.style.marginLeft = "50vw"; 
        }

        if(this.state.page == 4) {
            document.getElementById("SMLessonContainer_cicles_dot5").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot6").style.backgroundColor = "#0075C4";

            let buttons = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttons.style.marginLeft = "40vw"; 
 


        }  

        if(this.state.page == 5) {
            document.getElementById("SMLessonContainer_cicles_dot6").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot7").style.backgroundColor = "#0075C4";

            let buttonpara = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttonpara.style.marginRight = "-20vw"; 

            let buttons = document.querySelector("#SMLessonContainer_buttons");
            console.log("ye");
            buttons.style.marginTop = "5vh"; 
 
        }

        if(this.state.page == 6) {

            let buttonpara = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttonpara.style.marginRight = "-10vw"; 

            let buttons = document.querySelector("#SMLessonContainer_buttons");
            console.log("ye");
            buttons.style.marginTop = "0vh"; 

            document.getElementById("SMLessonContainer_cicles_dot7").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot8").style.backgroundColor = "#0075C4";
        }
        if(this.state.page == 7) {

            let buttonpara = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttonpara.style.marginRight = "5vw"; 

            let buttons = document.querySelector("#SMLessonContainer_buttons");
            console.log("ye");
            buttons.style.marginTop = "5vh"; 


            document.getElementById("SMLessonContainer_cicles_dot8").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot9").style.backgroundColor = "#0075C4";
        } 
        if(this.state.page == 8) {
            document.getElementById("SMLessonContainer_cicles_dot9").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot10").style.backgroundColor = "#0075C4";
        }
        if(this.state.page == 9) {

            let buttonpara = document.querySelector("#SMLessonContainer_buttons > p");
            console.log("ye");
            buttonpara.style.marginRight = "-10vw"; 

            let buttons = document.querySelector("#SMLessonContainer_buttons");
            console.log("ye");
            buttons.style.marginTop = "0vh"; 

            let buttonText = document.querySelector("#SMLessonContainer_buttons button");
            console.log("ye");
            buttonText.innerHTML = "Finish"
            document.getElementById("SMLessonContainer_cicles_dot10").style.backgroundColor = "gray";
            document.getElementById("SMLessonContainer_cicles_dot11").style.backgroundColor = "#0075C4";

        }

        if(this.state.page == 10) {
            window.location.assign('/learn');
        }
    }

    showLoader() {
        const dataSciencetitle = "Our data scientist is on it"; 
        const dataSciencedescription = "While we're analyzing your ad words, let's simulate an ad campaign to show how far simple advertisements can spread through a social media platform by targeting people with specific interests"; 
         if(!this.state.loadingCompHidden) {
          console.log(compLoaded); 
          setTimeout(() => {
            this.setState({loadingCompHidden: true, page:this.state.page+1});
          }, this.timeout);  
          compLoaded = true; 
          return (<LoadingComp title={dataSciencetitle} description={dataSciencedescription}/>)
         } 
         return (null)
    }

    render() {
      return (
        <div id = "SMLessonContainer">
        
            <div id="SMLessonContainer_Left">
                <div id="SMLessonContainer_dots">
                            <div id ="SMLessonContainer_cicles_dot1"> </div>
                            <div id ="SMLessonContainer_cicles_dot2"> </div>
                            <div id ="SMLessonContainer_cicles_dot3"> </div>
                            <div id ="SMLessonContainer_cicles_dot4"> </div>
                            <div id ="SMLessonContainer_cicles_dot5"> </div>
                            <div id ="SMLessonContainer_cicles_dot6"> </div>
                            <div id ="SMLessonContainer_cicles_dot7"> </div>
                            <div id ="SMLessonContainer_cicles_dot8"> </div>
                            <div id ="SMLessonContainer_cicles_dot9"> </div>
                            <div id ="SMLessonContainer_cicles_dot10"> </div>
                            <div id ="SMLessonContainer_cicles_dot11"> </div>
                </div>
            </div>


            <div id="SMLessonContainer_Right"> 
                {this.state.page == 0 ? <SMLessonIntro onContinueClicked={(clicked) => this.onContinueClicked(clicked)}/>:null}
                {this.state.page == 1 ? <SocialMediaStart/>:null}
                {this.state.loadingCompHidden && (this.state.page == 2) ? <UploadForm onSubmitClicked={(newResult, words) => this.onSubmitClicked(newResult, words)}  onModalClicked={(modal) => this.onModalClicked(modal)} modal={this.state.modal}/>:null}
                {this.state.modal ? <ModalComp display="visible" onExitClicked={(modal) => this.onExitClicked(modal)}/>:null}
                {this.showLoader()}
                {this.state.page == 3 ? <Adwords adwords={this.state.adwords} onAdwordClicked={(number, selectedAdWord) => this.onAdwordClicked(number, selectedAdWord)}/>:null }
                {this.state.page == 4 ? <CreateAdPart1 selectedWord={this.state.selectedWord} budgetChanged={(budget) => this.budgetChanged(budget)} bannerAdsChanged={(banner) => this.bannerAdsChanged(banner)} postAdsChanged={(post) => this.postAdsChanged(post)} videoAdsChanged={(video) => this.videoAdsChanged(video)}/>:null}
                {this.state.page == 5 ? <CreateAdPart2 budget={this.state.budget} videoAds={this.state.videoAds} postAds={this.state.postAds} bannerAds={this.state.bannerAds} getEngagement={(reach,weeks) => this.getEngagement(reach,weeks)}/>:null} 
                {this.state.page == 6 ? <UsersReached userNum={this.state.usersReached} weeksNum={this.state.weeksNum} adwords={this.state.adwords}/>:null}
                {this.state.page == 7 ? <CircleAdComp adwords={this.state.adwords}/>:null}
                {this.state.page == 8 ? <LessonsComp/>:null}
                {this.state.page == 9 ? <LessonsComp2/>:null}
                {this.state.page == 10 ? <VisualizationComp/>:null}
                <div id="SMLessonContainer_buttons"> 
                    <p onClick={this.goBack}> Back </p>
                    <button onClick={this.changeComponent}> Continue </button>
                </div>
            </div>

        </div>
    )}
}

export default SMLessonContainer;