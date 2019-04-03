using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using DashApp.Models;
using DashApp.Repsoitory;

namespace DashApp.Controllers
{
    public class UserController : Controller
    {
        // GET: User
       


        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]  
        [ValidateAntiForgeryToken]
        public ActionResult Login(UserProfileViewModel objUser)
        {
            if (ModelState.IsValid)

            {
                UserProfile profile = new UserProfile();
                profile.ID = objUser.ID;
                profile.Password = objUser.Password;
                profile.StateName = objUser.StateName;
                profile.UserEmailId = objUser.UserEmailId;
                profile.Gender = objUser.Gender;
                profile.CityName = objUser.CityName;
                profile.Address = objUser.Address;
                profile.CountryName = objUser.CountryName;
                using (RegMVCEntities db = new RegMVCEntities())
                {

                    db.UserProfiles.Add(profile);
                    db.SaveChanges();
                   
                }
            }
            return View(objUser);
        }

        public ActionResult UserLogin()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult UserLogin(UserProfileViewModel objUser)
        {
            if (ModelState.IsValid)

            {
                UserProfile profile = new UserProfile();
                profile.ID = objUser.ID;
                profile.Password = objUser.Password;
               
                using (RegMVCEntities db = new RegMVCEntities())
                {


                    var obj = db.UserProfiles.Where(a => a.UserEmailId.Equals(profile.UserEmailId) && a.Password.Equals(profile.Password)).FirstOrDefault();
                    if (obj != null)
                    {
                        Session["UserID"] = obj.UserEmailId.ToString();
                        Session["UserName"] = obj.UserEmailId.ToString();
                        return RedirectToAction("UserProfile", obj);
                    }
                }
            }
            return View(objUser);
        }
        [Authorize]
        public ActionResult UserProfile(UserProfile userProfile)
        {
            var userProfileViewModel = new UserProfileViewModel();
            userProfileViewModel.ID = userProfile.ID;
            userProfileViewModel.Password = userProfile.Password;
            userProfileViewModel.StateName = userProfile.StateName;
            userProfileViewModel.UserEmailId = userProfile.UserEmailId;
            userProfileViewModel.Gender = userProfile.Gender;
            userProfileViewModel.CityName = userProfile.CityName;
            userProfileViewModel.Address = userProfile.Address;
            userProfileViewModel.CountryName = userProfile.CountryName;
            userProfileViewModel.confirmPassword = userProfile.Password;

            if (Session["UserID"] != null)
            {
                return View(userProfileViewModel);
            }
            else
            {
                return RedirectToAction("Login");
            }
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult UserProfile(UserProfileViewModel objUser)
        {
            if (ModelState.IsValid)

            {
                UserProfile profile = new UserProfile();
                profile.ID = objUser.ID;
                profile.Password = objUser.Password;
                profile.StateName = objUser.StateName;
                profile.UserEmailId = objUser.UserEmailId;
                profile.Gender = objUser.Gender;
                profile.CityName = objUser.CityName;
                profile.Address = objUser.Address;
                profile.CountryName = objUser.CountryName;
                using (RegMVCEntities db = new RegMVCEntities())
                {

                    var obj = db.UserProfiles.Where(a => a.UserEmailId.Equals(profile.UserEmailId) && a.Password.Equals(profile.Password)).FirstOrDefault();
                    if (obj != null)
                    {
                        obj = profile;
                        db.SaveChanges();
                    }
                }
            }
            return View(objUser);
     
        }
        public ActionResult LogOut()
        {
            FormsAuthentication.SignOut();
            Session.Abandon();
            return RedirectToAction("Login");
        }


    }
}