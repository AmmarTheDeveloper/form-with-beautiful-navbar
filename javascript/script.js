const menu = document.querySelector( 'header .menu' )
const dropdowns = document.querySelectorAll( 'header .dropdown' )
const nav = document.querySelector( 'header nav' )

dropdowns.forEach( drop => {
    drop.addEventListener( 'click', () => {
        drop.classList.toggle( 'active' )
    } )
} )

menu.addEventListener( 'click', () => {

    menu.classList.toggle( 'active' )
    nav.classList.toggle( 'active' )

} )

window.addEventListener( 'click', ( e ) => {

    const activeDropdowns = document.querySelectorAll( '.dropdown.active' )

    activeDropdowns.forEach( ( dropdown ) => {

        if ( e.target != dropdown && !dropdown.contains( e.target ) ) {
            dropdown.classList.remove( 'active' )
        }

    } )

} )

// form validation starts here

const fullname = document.querySelector( '#full_name' )
const gender = document.querySelector( '#gender' )
const dob = document.querySelector( '#dateOfBirth' )
const panCardNo = document.querySelector( '#panCardNo' )
const aadhaarNo = document.querySelector( '#aadhaarNo' )
const contactNo = document.querySelector( '#contactNo' )
const email = document.querySelector( '#email' )
const address = document.querySelector( '#address' )
const qualificationSelect = document.querySelector( '.form-container select[name=AcademicQualification]' )
const Fees = document.querySelector( '#fees' )
const paidFees = document.querySelector( '#paidFees' )
const password = document.querySelector( '#password' )
const confirmPassword = document.querySelector( "#cnfPassword" )
const qualificationContainer = document.querySelector( '.qualification-container' )
const clientSideError = document.querySelector( '.client-side-error' )
const form = document.querySelector( '.form-container form' )


// form.onsubmit = formValidation

function formValidation () {

    let panCardRegEx = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/g
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let AadhaarNoRegEx = /^[0-9]{12}$/g
    let phoneNoRegEx = /^[0-9]{10}$/g

    if ( fullname.value.length < 5 || fullname.value == '' ) {

        setError( 'Enter Full Name Properly' )
        return false

    } else if ( gender.value == '' ) {

        setError( "Choose Gender" )
        return false

    } else if ( dob.value == '' ) {

        setError( 'Enter Date Of Birth' )
        return false

    } else if ( !panCardRegEx.test( panCardNo.value ) ) {

        setError( 'Enter Pan No Properly' )
        return false

    } else if ( !AadhaarNoRegEx.test( aadhaarNo.value ) ) {

        setError( 'Enter Aadhaar No Properly' )
        return false

    } else if ( !phoneNoRegEx.test( contactNo.value ) ) {

        setError( 'Enter Contact No Properly' )
        return false

    } else if ( !emailRegEx.test( email.value ) ) {

        setError( 'Enter Email Properly' )
        return false

    } else if ( address.value.length < 10 ) {

        setError( ' Enter Address Properly' )
        return false

    } else if ( qualificationSelect.value == '' ) {

        setError( 'Choose Your Current Qualification' )
        return false

    } else if ( Fees.value == '' ) {

        setError( 'Choose Course' )
        return false

    } else if ( paidFees.value.length < 3 ) {

        setError( 'Enter Proper Amount' )
        return false

    } else if ( password.value.length < 4 ) {

        setError( 'Password Length Should Be Greater Than 4' )
        return false

    } else if ( confirmPassword.value != password.value ) {

        setError( 'Confirm Password Not Matched' )
        return false

    } else {

        removeError()

    }

}


function setError ( error ) {
    clientSideError.classList.add( 'active' )
    clientSideError.innerText = error
}

function removeError () {
    clientSideError.classList.remove( 'active' )
    clientSideError.innerText = ''
}


//tabs for qualificationSelect tag

let sscHTML = `
                    <div class="ssc-container">
                    <label>SSC QUALIFICATION DETAILS :</label>
                    <input type="text" name="ssc" id="ssc" [(ngModel)]="user.ssc" placeholder="Enter name of school">

                    <div class="two-input">

                        <div>
                            <!-- <label for="sscPercentage">Enter SSC Percentage</label> -->
                            <input type="text" name="sscPercentage" id="sscPercentage" [(ngModel)]="user.sscPercentage"
                                placeholder="Percentage">

                        </div>

                        <div>
                            <!-- <label for="sscPassingYear">Enter SSC Passing Year </label> -->
                            <input type="text" name="sscPassingYear" id="sscPassingYear"
                                [(ngModel)]="user.sscPassingYear" placeholder="Year of passing">

                        </div>

                    </div>
                    </div>

`

let hscHTML = `
                <div class="hsc-container">
                <label>HSC QUALIFICATION DETAILS :</label>

                <input type="text" name="hsc" id="hsc" [(ngModel)]="user.hsc"
                    placeholder="Enter name of Juniour College">
                <div class="two-input">
                    <div>
                        <!-- <label for="hscPercentage">Enter HSC Percentage</label> -->
                        <input type="text" name="hscPercentage" id="hscPercentage" [(ngModel)]="user.hscPercentage"
                            placeholder="Percentage">
                    </div>
                    <div>

                        <!-- <label for="hscPassingYear">Enter HSC Passing Year</label> -->
                        <input type="text" name="hscPassingYear" id="hscPassingYear"
                            [(ngModel)]="user.hscPassingYear" placeholder="Year of passing">
                    </div>
                </div>
                </div>
`

let graduationHTML = `
                        <div class="graduation-container">
                        <label>GRADUATION QUALIFICATION DETAILS :</label>
                        <input type="text" name="graduate" id="graduate" [(ngModel)]="user.graduate"
                            placeholder="Enter name of College">


                        <div class="two-input">
                            <div>
                                <input type="text" name="graduatePercentage" id="graduatePercentage"
                                    [(ngModel)]="user.graduatePercentage" placeholder="Percentage">
                            </div>
                            <div>
                                <input type="text" name="graduatePassingYear" id="graduatePassingYear"
                                    [(ngModel)]="user.graduatePassingYear" placeholder="Year of passing">
                            </div>
                        </div>
                        </div>
`

let postGraduationHTML = `
                            <div class="post-graduation-container">
                            <label>POST GRADUATION QUALIFICATION DETAILS :</label>
                            <input type="text" name="postGraduate" id="postGraduate" [(ngModel)]="user.postGraduate"
                                placeholder="Enter name of College">

                            <div class="two-input">
                                <div>
                                    <input type="text" name="postGraduatePercentage" id="postGraduatePercentage"
                                        [(ngModel)]="user.postGraduatePercentage" placeholder="Percentage">
                                </div>
                                <div>
                                    <input type="text" name="postGraduatePassingYear" id="postGraduatePassingYear"
                                        [(ngModel)]="user.postGraduatePassingYear" placeholder="Year of passing">
                                </div>
                            </div>
                            </div>
`

// qualificationSelect.onchange = () => {
//     let value = qualificationSelect.value

//     if ( value == 'ssc' ) {
//         qualificationContainer.innerHTML = sscHTML
//     } else if ( value == 'hsc' ) {
//         qualificationContainer.innerHTML = sscHTML + hscHTML
//     } else if ( value == 'graduate' ) {
//         qualificationContainer.innerHTML = sscHTML + hscHTML + graduationHTML
//     } else if ( value == 'Post-Graduate' ) {
//         qualificationContainer.innerHTML = sscHTML + hscHTML + graduationHTML + postGraduationHTML
//     }
// }
