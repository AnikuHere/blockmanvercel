 --- Windows Setup BG Compile (Base GameServer SETUP)
 --- Guide written by DeniusGG/Aniku based on LapyshBG/IIKJ/Tarelka video (https://youtu.be/DmHIsc-LDVI)
 


 -.- Start of Requirments list -.-
 VS & VS Code 2022
 Windows SDK - bundled in "Development of classic applications for C++"
 Build Tools (Version 143) - bundled in "Development of classic applications for C++"
 CMAKE

 resource downloads: 
 https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbFZ2dDNEMEhhZnoyVlY4SWtuVi1fRHZFZkpad3xBQ3Jtc0trWVNYN0lEUWlKaklHajBGU2dfMURqMF9UX25udGl2c1dFcXdZeFF0REI0SmhER3lIaXBnQXE3NUFZdy1mM2lkOG1kdkE0SlFSN1IwVUxzVU05WEJFMXNvSmV1QUpRNk92OTR0cDZ3UmdHRW9NemRhaw&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2F205q8bghj6m9d7e%2Fengine-resources.zip%2Ffile&v=DmHIsc-LDVI
 https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbE8yMGVsZ0t6alhJQ3pjdUEzYkZyd1o1LWZJUXxBQ3Jtc0trdmJEN2o0dDhqOFpvU0g0c0Zqc0xrM19HXzcyM0pwTGNzMzJ2U2x0ckdpQ0JWaHRBbWtTTnduMXlEdUo4dDRRZmhPR2dXVE9WQmsyeW1HN1ZicDVwSGdjU2lrLXFCYnFwaEZsc1ZJbEF3Vmtpc0QwUQ&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Fnqrsks1xtomvrdq%2Fengine-main_%2525281%252529.zip%2Ffile&v=DmHIsc-LDVI
 https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2l3SmN2WF9QQk1sM0RFaVZkQTRScTBpYTdCUXxBQ3Jtc0tuUnJ2UWRtd2tGY3AwTUFRVnVYQjR4ZGRhTWZnMEc0NzBVQnUwSGZMTGNwWmNLUTB6ZzBrUmRGTEV1T3dmcWttMjl5eUh4enNMa1NwWjJ6NEdmcHRUV1ZDZTg5UnhGSnZ2dzhkeGNrNlR3dXNRaTM1TQ&q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Fuf5birwmnoqxpg6%2Fengine-dependencies.zip%2Ffile&v=DmHIsc-LDVI
 -.- End of requirments list -.-
 
 Steps for Windows compile

- Open cmakeall.bat. Once it opens, wait about 30secs-1.30minute
- Close the program after all missions are completed (May close automatically)
- Open server.sln (Found in: server -> Build)
- Open Troubleshoot menu of "GameServer"
- Enable Debug mode
- Close Server SLN file
- Open lord.sln (Found in Build folder)
- Set mode to Debug
- Start compile proccess of Engine folder
- Open logic.lsn and repeat process
- Open WinServer.sln (In server folder) and repeat process again
- If you encounter error, create a folder with all DLLs and game resource (name it "res")
- Repeat process on all LSN folder

 
