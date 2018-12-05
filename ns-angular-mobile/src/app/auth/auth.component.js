"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_settings_1 = require("~/app/app-settings");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var firebase = require("nativescript-plugin-firebase");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var AuthComponent = /** @class */ (function () {
    function AuthComponent(_router, httpClient) {
        this._router = _router;
        this.httpClient = httpClient;
        this.url = app_settings_1.AppSettings.API_URL + "/users/create";
    }
    AuthComponent.prototype.ngOnInit = function () {
        // firebase.init({
        //     onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
        //         console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        //         if (data.loggedIn) {
        //             console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
        //             _router.
        //         }
        //     }
        // });
    };
    AuthComponent.prototype.onTapLogin = function () {
        //     var listener = {
        //         onAuthStateChanged((data) => {
        //             console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
        //             if (data.loggedIn) {
        //                 console.log("User info", data.user);
        //                 firebase.removeAuthStateListener(listener);
        //                 this._ro
        // }
        // },
        // thisArg: this
        // });
        var _this = this;
        console.log("Facebook login");
        console.log("Firebase " + firebase);
        // firebase.addAuthStateListener(listener);
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            // Optional
            facebookOptions: {
                scope: ['public_profile', 'email']
            },
        }).then(function (result) {
            JSON.stringify(result);
            firebase.getAuthToken({
                // default false, not recommended to set to true by Firebase but exposed for {N} devs nonetheless :)
                forceRefresh: false
            }).then(function (token) {
                console.log("Auth token retrieved: " + token);
                app_settings_1.AppSettings.TOKEN = token;
                _this._router.navigate(['/home/items']);
                var data = {
                    "id": token,
                    "name": result.name
                };
                console.log(data);
                _this.httpClient.post(_this.url, data, httpOptions).subscribe();
            }, function (errorMessage) {
                console.log("Auth token retrieval error: " + errorMessage);
            });
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'ns-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.Router, http_1.HttpClient])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCxtREFBK0M7QUFDL0MsMENBQXVDO0FBQ3ZDLDZDQUE2RDtBQUU3RCxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLFdBQVcsR0FBRztJQUNoQixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUM7Q0FDakUsQ0FBQztBQVNGO0lBSUksdUJBQW1CLE9BQWUsRUFBVSxVQUFzQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUYxRCxRQUFHLEdBQU0sMEJBQVcsQ0FBQyxPQUFPLGtCQUFlLENBQUM7SUFHcEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxrQkFBa0I7UUFDbEIsOEhBQThIO1FBQzlILDZGQUE2RjtRQUM3RiwrQkFBK0I7UUFDL0IsbUdBQW1HO1FBQ25HLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRUQsa0NBQVUsR0FBVjtRQUNBLHVCQUF1QjtRQUN2Qix5Q0FBeUM7UUFDekMsaUdBQWlHO1FBQ2pHLG1DQUFtQztRQUNuQyx1REFBdUQ7UUFDdkQsOERBQThEO1FBQzlELDJCQUEyQjtRQUNmLElBQUk7UUFDUixLQUFLO1FBQ0wsZ0JBQWdCO1FBQ3BCLE1BQU07UUFYVixpQkFpREM7UUFwQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRXBDLDJDQUEyQztRQUMzQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ1osSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNoQyxXQUFXO1lBQ1gsZUFBZSxFQUFFO2dCQUNiLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQzthQUNyQztTQUVKLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUNsQixvR0FBb0c7Z0JBQ3BHLFlBQVksRUFBRSxLQUFLO2FBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFLO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQzlDLDBCQUFXLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLElBQUksR0FBRztvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxNQUFNLEVBQUUsTUFBTSxDQUFDLElBQUk7aUJBQ3RCLENBQUM7Z0JBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEUsQ0FBQyxFQUNELFVBQVUsWUFBWTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUMvRCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFwRVEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FLOEIsZUFBTSxFQUFzQixpQkFBVTtPQUp6RCxhQUFhLENBcUV6QjtJQUFELG9CQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBcHBTZXR0aW5nc30gZnJvbSBcIn4vYXBwL2FwcC1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSlcclxufTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbnMtYXV0aCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXV0aC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIHVybCA9IGAke0FwcFNldHRpbmdzLkFQSV9VUkx9L3VzZXJzL2NyZWF0ZWA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBodHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gZmlyZWJhc2UuaW5pdCh7XHJcbiAgICAgICAgLy8gICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oZGF0YSkgeyAvLyBvcHRpb25hbCBidXQgdXNlZnVsIHRvIGltbWVkaWF0ZWx5IHJlLWxvZ29uIHRoZSB1c2VyIHdoZW4gaGUgcmUtdmlzaXRzIHlvdXIgYXBwXHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxvZ2dlZEluID8gXCJMb2dnZWQgaW4gdG8gZmlyZWJhc2VcIiA6IFwiTG9nZ2VkIG91dCBmcm9tIGZpcmViYXNlXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIncyBlbWFpbCBhZGRyZXNzOiBcIiArIChkYXRhLnVzZXIuZW1haWwgPyBkYXRhLnVzZXIuZW1haWwgOiBcIk4vQVwiKSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgX3JvdXRlci5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVGFwTG9naW4oKTogdm9pZCB7XHJcbiAgICAvLyAgICAgdmFyIGxpc3RlbmVyID0ge1xyXG4gICAgLy8gICAgICAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoKGRhdGEpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvXCIsIGRhdGEudXNlcik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZmlyZWJhc2UucmVtb3ZlQXV0aFN0YXRlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuX3JvXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8vIHRoaXNBcmc6IHRoaXNcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZhY2Vib29rIGxvZ2luXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgXCIgKyBmaXJlYmFzZSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgIC8vIGZpcmViYXNlLmFkZEF1dGhTdGF0ZUxpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgICAgICAvLyBPcHRpb25hbFxyXG4gICAgICAgICAgICBmYWNlYm9va09wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIHNjb3BlOiBbJ3B1YmxpY19wcm9maWxlJywgJ2VtYWlsJ11cclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0QXV0aFRva2VuKHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGZhbHNlLCBub3QgcmVjb21tZW5kZWQgdG8gc2V0IHRvIHRydWUgYnkgRmlyZWJhc2UgYnV0IGV4cG9zZWQgZm9yIHtOfSBkZXZzIG5vbmV0aGVsZXNzIDopXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VSZWZyZXNoOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSkudGhlbigodG9rZW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoIHRva2VuIHJldHJpZXZlZDogXCIgKyB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcFNldHRpbmdzLlRPS0VOID0gdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lL2l0ZW1zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogcmVzdWx0Lm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cENsaWVudC5wb3N0KHRoaXMudXJsLCBkYXRhLCBodHRwT3B0aW9ucykuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aCB0b2tlbiByZXRyaWV2YWwgZXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19