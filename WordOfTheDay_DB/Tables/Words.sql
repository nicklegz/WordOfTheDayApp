CREATE TABLE [dbo].[Words]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[Word] VarChar(50) NOT NULL,
	[Definition] VARCHAR(MAX) NOT NULL,
	[Type] VARCHAR(50) NOT NULL,
	[NumberTimesUsed] Int NOT NULL Default 0
)
